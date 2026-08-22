import { mockCreatorStats } from '../data/mockModels';

export default function CreatorDashboard({ onOpenSellModal }) {
  return (
    <div className="text-white space-y-8 max-w-7xl mx-auto py-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-slate-900 p-6 border border-slate-800 rounded-2xl">
        <div>
          <h2 className="text-2xl font-bold">Creator Dashboard</h2>
          <p className="text-slate-400 text-sm">
            Managing listings for <span className="text-indigo-400 font-semibold">{mockCreatorStats.creatorHandle}</span>
          </p>
        </div>
        <button
          onClick={onOpenSellModal}
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-900/20"
        >
          + List New Model
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Earnings</p>
          <p className="text-3xl font-extrabold text-emerald-400 mt-2">₹{mockCreatorStats.totalEarnings.toLocaleString()}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Sales</p>
          <p className="text-3xl font-extrabold text-white mt-2">{mockCreatorStats.totalSales}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Views</p>
          <p className="text-3xl font-extrabold text-indigo-400 mt-2">{mockCreatorStats.totalViews.toLocaleString()}</p>
        </div>
      </div>

      {/* Published Listings Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-4">Your Active Listings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-800/50 text-slate-300 uppercase text-xs">
              <tr>
                <th className="p-3">Model Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Performance</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {mockCreatorStats.listedModels.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/30">
                  <td className="p-3 font-medium text-white">{item.title}</td>
                  <td className="p-3">
                    <span className="bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded text-xs">{item.category}</span>
                  </td>
                  <td className="p-3 text-emerald-400 font-semibold">{item.price}</td>
                  <td className="p-3">{item.sales}</td>
                  <td className="p-3">
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2 py-0.5 rounded">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}