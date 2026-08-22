import React from 'react';

function FilterSidebar({ selectedCategory, setSelectedCategory, selectedPriceTier, setSelectedPriceTier }) {
  return (
    <aside className="w-full md:w-64 shrink-0 font-sans pr-6 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
        <h2 className="text-lg font-bold text-white tracking-wide">Filters</h2>
        <button 
          onClick={() => {
            if (setSelectedCategory) setSelectedCategory('All');
            if (setSelectedPriceTier) setSelectedPriceTier('All');
          }}
          className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
        >
          Clear all
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-200 mb-3 tracking-wider uppercase text-[11px] text-slate-400">Price</h3>
        <div className="space-y-3">
          {['Free', 'Paid'].map((tier) => (
            <label key={tier} className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedPriceTier === tier}
                onChange={() => setSelectedPriceTier && setSelectedPriceTier(selectedPriceTier === tier ? 'All' : tier)}
                className="w-4 h-4 rounded border-slate-700 bg-slate-800 accent-indigo-500 cursor-pointer focus:ring-0 focus:ring-offset-0"
              />
              <span className="ml-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                {tier}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Model Type Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-200 mb-3 tracking-wider uppercase text-[11px] text-slate-400">Model Type</h3>
        <div className="space-y-3">
          {['API Access', 'Weights', 'Prompts'].map((label, idx) => (
            <label key={label} className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                defaultChecked={idx === 0}
                className="w-4 h-4 rounded border-slate-700 bg-slate-800 accent-indigo-500 cursor-pointer focus:ring-0 focus:ring-offset-0"
              />
              <span className="ml-3 text-sm text-slate-300 group-hover:text-white transition-colors">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-200 mb-3 tracking-wider uppercase text-[11px] text-slate-400">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button 
              onClick={() => setSelectedCategory && setSelectedCategory('All')}
              className={`flex items-center text-sm font-medium w-full text-left transition-colors ${
                selectedCategory === 'All' ? 'text-indigo-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              All Categories
            </button>
          </li>
          {['LLMs', 'Image Generation', 'Audio Models', 'Computer Vision', 'Code Generation'].map((category) => (
            <li key={category}>
              <button 
                onClick={() => setSelectedCategory && setSelectedCategory(category)}
                className={`flex items-center text-sm w-full text-left pl-6 transition-colors ${
                  selectedCategory === category 
                    ? 'text-indigo-400 font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-sm font-semibold text-slate-200 mb-3 tracking-wider uppercase text-[11px] text-slate-400">Rating</h3>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer group">
            <input 
              type="checkbox" 
              defaultChecked
              className="w-4 h-4 rounded border-slate-700 bg-slate-800 accent-indigo-500 cursor-pointer focus:ring-0 focus:ring-offset-0"
            />
            <div className="ml-3 flex items-center text-sm text-slate-300 group-hover:text-white transition-colors">
              <svg className="w-4 h-4 text-amber-400 fill-current mr-1.5" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              4.0 & above
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;