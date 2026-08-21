function Navbar({ currentView, setCurrentView, onOpenSellModal }) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-lg text-indigo-400">ModelShop</div>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentView('marketplace')}
            className={`px-3 py-1 rounded text-sm ${currentView === 'marketplace' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            Marketplace
          </button>
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`px-3 py-1 rounded text-sm ${currentView === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            Dashboard
          </button>
        </div>
        <button 
          onClick={onOpenSellModal}
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-lg"
        >
          + Sell Model
        </button>
      </div>
    </header>
  );
}
export default Navbar;