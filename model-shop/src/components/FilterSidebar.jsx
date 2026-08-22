import React from 'react';

 function FilterSidebar() {
  return (
    <aside className="w-full md:w-64 shrink-0 font-sans pr-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-900">Filters</h2>
        <button className="text-sm text-white hover:text-indigo-700 font-medium">
          Clear all
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-white mb-3">Price</h3>
        <div className="space-y-3">
          {['Free', '₹0 - ₹99'].map((label) => (
            <label key={label} className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-slate-300 accent-indigo-600 cursor-pointer"
              />
              <span className="ml-3 text-sm text-white group-hover:text-slate-900">{label}</span>
            </label>
          ))}
          <label className="flex items-center cursor-pointer group">
            <input 
              type="checkbox" 
              defaultChecked
              className="w-4 h-4 rounded border-slate-300 accent-indigo-600 cursor-pointer"
            />
            <span className="ml-3 text-sm text-white group-hover:text-slate-900">₹100 - ₹500</span>
          </label>
          <label className="flex items-center cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-slate-300 accent-indigo-600 cursor-pointer"
            />
            <span className="ml-3 text-sm text-white group-hover:text-slate-900">₹500+</span>
          </label>
        </div>
      </div>

      {/* Model Type Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-white mb-3">Model Type</h3>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer group">
            <input 
              type="checkbox" 
              defaultChecked
              className="w-4 h-4 rounded border-slate-300 accent-indigo-600 cursor-pointer"
            />
            <span className="ml-3 text-sm text-white group-hover:text-slate-900">API Access</span>
          </label>
          {['Weights', 'Prompts'].map((label) => (
            <label key={label} className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-slate-300 accent-indigo-600 cursor-pointer"
              />
              <span className="ml-3 text-sm text-white group-hover:text-slate-900">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-white mb-3">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button className="flex items-center text-sm font-medium text-white w-full text-left">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              All Categories
            </button>
          </li>
          {['LLMs', 'Image Generation', 'Audio Models', 'Computer Vision', 'Code Generation'].map((category) => (
            <li key={category}>
              <button className="flex items-center text-sm text-white hover:text-slate-900 w-full text-left pl-6">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-white mb-3">Rating</h3>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer group">
            <input 
              type="checkbox" 
              defaultChecked
              className="w-4 h-4 rounded border-slate-300 accent-indigo-600 cursor-pointer"
            />
            <div className="ml-3 flex items-center text-sm text-white group-hover:text-shadow-white">
              <svg className="w-4 h-4 text-indigo-600 fill-current mr-1.5" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              4 & above
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
}
export default FilterSidebar;
