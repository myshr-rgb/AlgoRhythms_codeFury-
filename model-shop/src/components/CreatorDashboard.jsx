import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data to match your image exactly
const mockCreatorStats = {
  creatorHandle: "Shrusti",
  totalEarnings: 2400,
  totalViews: 520,
  totalSales: 6,
  totalModels: 3,
  listedModels: [
    { id: 1, title: "VisionPro AI", category: "Computer Vision", price: "₹299", views: 120, sales: 2, earnings: "₹1,000", status: "Active" },
    { id: 2, title: "CodeMate", category: "Code Generation", price: "FREE", views: 210, sales: 2, earnings: "₹0", status: "Active" },
    { id: 3, title: "SpeechX", category: "Speech-to-Text", price: "₹499", views: 499, sales: 1, earnings: "₹1,000", status: "Active" },
  ]
};

export function CreatorDashboard({ onOpenSellModal }) {
  const [listings, setListings] = useState(mockCreatorStats.listedModels);

  const handleDelete = (id) => {
    // Filters out the deleted item; Framer Motion handles the animation
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

        {/* Stats Grid matching image_8505ee.jpg */}
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

        {/* Your Models Table Area */}
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-4">Your Models</h2>
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400 border-b border-[#2D2D3A]">
                <tr>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Views</th>
                  <th className="pb-3 font-medium">Sales</th>
                  <th className="pb-3 font-medium">Earnings</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D2D3A]">
                {/* AnimatePresence enables exit animations for its direct children */}
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
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80"></div>
                            <div>
                              <p className="font-semibold text-white">{item.title}</p>
                              <p className="text-gray-400 text-xs">{item.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 font-medium">{item.price}</td>
                        <td className="py-4 text-gray-300">{item.views}</td>
                        <td className="py-4 text-gray-300">{item.sales}</td>
                        <td className="py-4 text-gray-300">{item.earnings}</td>
                        <td className="py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="bg-[#2D2D3A] hover:bg-[#3D3D4A] text-gray-300 text-xs px-4 py-1.5 rounded transition-colors">
                              View
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs px-4 py-1.5 rounded transition-colors"
                            >
                              Delete
                            </button>
                          </div>
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

export default function CreatorDashboard({ onOpenSellModal }) {
  const [listings, setListings] = useState(mockCreatorStats.listedModels);

  const handleDelete = (id) => {
    // Filters out the deleted item; Framer Motion handles the animation
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

        {/* Stats Grid matching image_8505ee.jpg */}
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

        {/* Your Models Table Area */}
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-4">Your Models</h2>
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400 border-b border-[#2D2D3A]">
                <tr>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Views</th>
                  <th className="pb-3 font-medium">Sales</th>
                  <th className="pb-3 font-medium">Earnings</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D2D3A]">
                {/* AnimatePresence enables exit animations for its direct children */}
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
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80"></div>
                            <div>
                              <p className="font-semibold text-white">{item.title}</p>
                              <p className="text-gray-400 text-xs">{item.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 font-medium">{item.price}</td>
                        <td className="py-4 text-gray-300">{item.views}</td>
                        <td className="py-4 text-gray-300">{item.sales}</td>
                        <td className="py-4 text-gray-300">{item.earnings}</td>
                        <td className="py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="bg-[#2D2D3A] hover:bg-[#3D3D4A] text-gray-300 text-xs px-4 py-1.5 rounded transition-colors">
                              View
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs px-4 py-1.5 rounded transition-colors"
                            >
                              Delete
                            </button>
                          </div>
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