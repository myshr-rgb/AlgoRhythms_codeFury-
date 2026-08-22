import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterSidebar from './components/FilterSidebar';
import ModelGrid from './components/ModelGrid';
import ModelDetailModal from './components/ModelDetailModal';
import SellModelModal from './components/SellModelModal';
import CreatorDashboard from './components/CreatorDashboard';
import { mockCreatorStats } from './data/mockModels';


export default function App() {
  const [currentView, setCurrentView] = useState('marketplace');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceTier, setSelectedPriceTier] = useState('All');
  const [selectedModel, setSelectedModel] = useState(null);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  
  // 1. Initialize state from localStorage, falling back to mockCreatorStats if empty
  const [creatorListings, setCreatorListings] = useState(() => {
    const savedListings = localStorage.getItem('creatorListings');
    return savedListings ? JSON.parse(savedListings) : (mockCreatorStats.listedModels || []);
  });

  // 2. Save to localStorage whenever creatorListings changes
  useEffect(() => {
    localStorage.setItem('creatorListings', JSON.stringify(creatorListings));
  }, [creatorListings]);

  const handleAddModel = (newModel) => {
    const formattedModel = {
      ...newModel,
      id: Date.now(),
      sales: '0 sales',
      status: 'Active',
    };

    setCreatorListings((prev) => [formattedModel, ...prev]);
    setIsSellModalOpen(false);
    setCurrentView('dashboard');
  };

  const handleDeleteListing = (id) => {
    setCreatorListings((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        onOpenSellModal={() => setIsSellModalOpen(true)} 
      />

      {currentView === 'marketplace' ? (
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          <Hero onOpenSellModal={() => setIsSellModalOpen(true)} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside className="md:col-span-1">
              <FilterSidebar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                selectedPriceTier={selectedPriceTier} 
                setSelectedPriceTier={setSelectedPriceTier} 
              />
            </aside>
            <section className="md:col-span-3">
              <ModelGrid 
                selectedCategory={selectedCategory} 
                selectedPriceTier={selectedPriceTier} 
                onSelectModel={(model) => setSelectedModel(model)} 
              />
            </section>
          </div>
        </main>
      ) : (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <CreatorDashboard 
            onOpenSellModal={() => setIsSellModalOpen(true)} 
            listings={creatorListings}
            onDeleteListing={handleDeleteListing}
          />
        </main>
      )}

      {selectedModel && (
        <ModelDetailModal 
          model={selectedModel} 
          onClose={() => setSelectedModel(null)} 
        />
      )}

      {isSellModalOpen && (
        <SellModelModal 
          onClose={() => setIsSellModalOpen(false)} 
          onSubmit={handleAddModel}
        />
      )}
    </div>
  );
}