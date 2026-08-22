import { useState } from 'react';
import { mockCreatorStats } from '../data/mockModels';

export default function CreatorDashboard({ onOpenSellModal, listings, onDeleteListing }) {
  return (
    <div className="text-white space-y-8 max-w-7xl mx-auto py-6">
      {/* Header - Glassmorphism Card */}
      <div className="flex justify-between items-center bg-slate-900/60 backdrop-blur-md p-6 border border-white/10 rounded-2xl shadow-2xl">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Creator Dashboard</h2>
          <p className="text-slate-400 text-sm mt-0.5">
            Managing listings for <span className="text-indigo-400 font-semibold">{mockCreatorStats.creatorHandle}</span>
          </p>
        </div>
        <button
          onClick={onOpenSellModal}
          className="bg-emerald-600/90 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-900/40 backdrop-blur-sm border border-emerald-400/30"
        >
          + List New Model
        </button>
      </div>

      {/* Stats Overview - Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl transition hover:border-white/20">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Earnings</p>
          <p className="text-3xl font-extrabold text-emerald-400 mt-2">₹{mockCreatorStats.totalEarnings.toLocaleString()}</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl transition hover:border-white/20">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Sales</p>
          <p className="text-3xl font-extrabold text-white mt-2">{mockCreatorStats.totalSales}</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl transition hover:border-white/20">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Views</p>
          <p className="text-3xl font-extrabold text-indigo-400 mt-2">{mockCreatorStats.totalViews.toLocaleString()}</p>
        </div>
      </div>

      {/* Published Listings Table - Glass Container */}
      <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-lg font-bold mb-4 tracking-tight">Your Active Listings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/40 backdrop-blur-sm text-slate-300 uppercase text-xs border-b border-white/5">
              <tr>
                <th className="p-3">Model Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Performance</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {listings.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-slate-500">No models listed yet.</td>
                </tr>
              ) : (
                listings.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-medium text-white">{item.title}</td>
                    <td className="p-3">
                      <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-3 text-emerald-400 font-semibold">₹{item.price}</td>
                    <td className="p-3 text-slate-400">{item.sales || '0 sales'}</td>
                    <td className="p-3">
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                        {item.status || 'Active'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => onDeleteListing(item.id)}
                        className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}