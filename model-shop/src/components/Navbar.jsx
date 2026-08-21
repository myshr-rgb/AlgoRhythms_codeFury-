import { useState } from "react";
import logo from "../assets/logo.png";
const NAV_LINKS=["Home","Categories","Explore","Creators","About"]


function Navbar({  
    view ="marketplace",
     onViewChange=()=>{},
     activeLink="Explore",
     onLinkChange=()=>{},
     onSellClick=()=>{},
     onToggleDarkMode=()=>{},
} 
)

{
const [query,setQuery]=useState("");

  return (
     


    <header className="sticky top-0 z-40 w-full border-b border-slate-300 bg-white/80 backdrop-blur-3xl dark:border-slate-700 dark:bg-slate-950/80">
      <div className=" mx-auto flex-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        //logo
        <span class="w-16 h-16 object-cover rounded-full">
          <img src={logo} alt="Company logo"/>
          </span>
          </div>
          {/* Primary nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link === activeLink;
            return (
              <button
                key={link}
                onClick={() => onLinkChange(link)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
                 >
                {link}
              </button>
            );
          })}
        </nav>
        {/* View toggle: Marketplace vs Dashboard */}
        <div className="hidden items-center rounded-lg bg-slate-100 p-1 text-sm font-medium dark:bg-slate-900 sm:flex">
          <button
            onClick={() => onViewChange("marketplace")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              view === "marketplace"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Marketplace
          </button>
          <button
            onClick={() => onViewChange("dashboard")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              view === "dashboard"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Dashboard
          </button>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search models..."
              className="w-40 rounded-md border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-sm text-slate-700 outline-none transition focus:w-56 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-indigo-900/40"
            />
            <button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            
          </button>

          <button
            onClick={onSellClick}
            className="flex items-center gap-1.5 rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 active:bg-indigo-800"
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Sell your model</span>
            <span className="sm:hidden">Sell</span>
          </button>
        </div>
      </div>
    </header>
  );
}

          


export default Navbar;


         