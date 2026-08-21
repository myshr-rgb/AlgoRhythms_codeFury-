import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockCreatorStats } from '../data/mockModels';

export default function CreatorDashboard({ onOpenSellModal }) {
  const [listings, setListings] = useState(mockCreatorStats.listedModels || []);

  const handleDelete = (id) => {
    setListings((prevListings) => prevListings.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0F0F13] text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Area */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold mb-1">Creator Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, Creator 🤠</p>
          </div>
          <button
            onClick={onOpenSellModal}
            className="bg-[#6B46C1] hover:bg-[#553C9A] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
          >
            + List New Model
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#1C1C24] border border-[#2D2D3A] p-5 rounded-xl outline outline-1 outline-[#6B46C1]/50">
            <p className="text-gray-400 text-xs font-medium mb-1">Total Earnings</p>
            <p className="text-3xl font-bold">₹{mockCreatorStats.totalEarnings.toLocaleString()}</p>
          </div>
          <div className="bg-[#1C1C24] border border-[#2D2D3A] p-5 rounded-xl">
            <p className="text-gray-400 text-xs font-medium mb-1">Total Views</p>
            <p className="text-3xl font-bold">{mockCreatorStats.totalViews}</p>
          </div>
          <div className="bg-[#1C1C24] border border-[#2D2D3A] p-5 rounded-xl">
            <p className="text-gray-400 text-xs font-medium mb-1">Total Sales</p>
            <p className="text-3xl font-bold">{mockCreatorStats.totalSales}</p>
          </div>
          <div className="bg-[#1C1C24] border border-[#2D2D3A] p-5 rounded-xl">
            <p className="text-gray-400 text-xs font-medium mb-1">Total Models</p>
            <p className="text-3xl font-bold">{listings.length}</p>
          </div>
        </div>

        {/* Your Active Listings Table Area */}
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-4">Your Active Listings</h2>
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400 border-b border-[#2D2D3A]">
                <tr>
                  <th className="pb-3 font-medium">MODEL NAME</th>
                  <th className="pb-3 font-medium">CATEGORY</th>
                  <th className="pb-3 font-medium">PRICE</th>
                  <th className="pb-3 font-medium">PERFORMANCE</th>
                  <th className="pb-3 font-medium">STATUS</th>
                  <th className="pb-3 font-medium text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D2D3A]">
                <AnimatePresence>
                  {listings.length === 0 ? (
                    <motion.tr 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                    >
                      <td colSpan={6} className="py-8 text-center text-gray-500">
                        No models listed yet.
                      </td>
                    </motion.tr>
                  ) : (
                    listings.map((item) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -30, backgroundColor: "rgba(225, 29, 72, 0.1)" }}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <td className="py-4 font-semibold text-white">{item.title}</td>
                        <td className="py-4">
                          <span className="bg-[#1C1C24] border border-[#2D2D3A] text-indigo-400 px-2.5 py-1 rounded text-xs">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-4 font-medium">{item.price}</td>
                        <td className="py-4 text-gray-300">
                          {item.sales ? `${item.sales} sales` : `${item.views || 0} views`}
                        </td>
                        <td className="py-4">
                          <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded text-xs font-medium">
                            Active
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs px-3 py-1.5 rounded transition-colors"
                          >
                            Delete
                          </button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}