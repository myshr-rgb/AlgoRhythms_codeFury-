import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#f8f9fc] text-slate-900 py-12 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100">
            AI Model Marketplace
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Find the right AI model <br className="hidden sm:inline" />
            for your next project
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-600 max-w-lg">
            Plug-and-play AI models crafted for modern developers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition duration-200 shadow-sm hover:shadow">
              Explore Models
            </button>
            <button className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm rounded-xl border border-slate-200 transition duration-200">
              How it works
            </button>
          </div>

          {/* Metrics / Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200/80 w-full max-w-lg mt-4">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">120+</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">Models</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">50+</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">Creators</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">₹1.2L+</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">Paid to creators</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Concept (Pure Inline SVGs) */}
        <div className="relative flex items-center justify-center min-h-95 sm:min-h-110 bg-linear-to-tr from-indigo-50/50 via-purple-50/30 to-blue-50/50 rounded-3xl p-8 border border-indigo-50">
          
          {/* Central Blue Glowing Node */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 bg-linear-to-tr from-indigo-600 to-indigo-500 rounded-3xl shadow-xl shadow-indigo-500/30 flex items-center justify-center">
            {/* Sparkle Icon */}
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>

          {/* Connected Floating Nodes */}
          
          {/* Top Left: Image / Frame Node */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>

          {/* Top Right: Audio / Wave Node */}
          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M2 10v4M6 6v12M10 3v18M14 8v8M18 5v14M22 10v4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Bottom Left: Code Node */}
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>

          {/* Bottom Right: Text Node */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 7V4h16v3M9 20h6M12 4v16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}