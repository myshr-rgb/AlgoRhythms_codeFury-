import { useState } from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = ["Home", "Categories", "Explore", "Creators", "About"];

function Navbar({
  currentView = "marketplace",
  setCurrentView = () => {},
  onOpenSellModal = () => {},
}) {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-300 bg-white/80 backdrop-blur-3xl dark:border-slate-700 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="AI Model Shop" className="h-8 w-8 object-contain" />
          <span className="hidden text-sm font-semibold text-slate-900 dark:text-white sm:inline">
            AI Model Shop
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              type="button"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden items-center rounded-lg bg-slate-100 p-1 text-sm font-medium dark:bg-slate-900 sm:flex">
          <button
            type="button"
            onClick={() => setCurrentView("marketplace")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              currentView === "marketplace"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Marketplace
          </button>
          <button
            type="button"
            onClick={() => setCurrentView("dashboard")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              currentView === "dashboard"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Dashboard
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">
              🔍
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search models..."
              className="w-40 rounded-md border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-sm text-slate-700 outline-none transition focus:w-56 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-indigo-900/40"
            />
          </div>

          <button
            type="button"
            onClick={onOpenSellModal}
            className="flex items-center gap-1.5 rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 active:bg-indigo-800"
          >
            <span aria-hidden="true">+</span>
            <span className="hidden sm:inline">Sell your model</span>
            <span className="sm:hidden">Sell</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


         