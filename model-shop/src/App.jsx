import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterSidebar from './components/FilterSidebar';
import ModelGrid from './components/ModelGrid';
import ModelDetailModal from './components/ModelDetailModal';
import SellModelModal from './components/SellModelModal';
import CreatorDashboard from './components/CreatorDashboard';
// Import mockModels alongside mockCreatorStats
import { mockModels, mockCreatorStats } from './data/mockModels';

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

  // Format incoming form data to match the standard model structure
  const handleAddModel = (newModel) => {
  const formattedModel = {
    ...newModel,
    id: Date.now(),
    title: newModel.title || newModel.name || 'Untitled Model',
    creator: newModel.creator || 'Anonymous',
    category: newModel.category || 'General',
    price: newModel.price ? Number(newModel.price) : 0,
    priceTier: Number(newModel.price) > 0 ? 'Paid' : 'Free',
    rating: 5.0,
    sales: '0 sales',
    status: 'Active',
    description: newModel.description || 'No description provided.',
    tags: newModel.tags || ['AI', 'Custom'],
  };

  setCreatorListings((prev) => [formattedModel, ...prev]);
  setIsSellModalOpen(false);
  setCurrentView('marketplace');
};

  const handleDeleteListing = (id) => {
    setCreatorListings((prev) => prev.filter((item) => item.id !== id));
  };

  // Combine default mock models with user-created listings
  const allModels = [...creatorListings, ...(mockModels || [])];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        onOpenSellModal={() => setIsSellModalOpen(true)} 
      />

      {currentView === 'marketplace' ? (
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          <div id="home">
            <Hero onOpenSellModal={() => setIsSellModalOpen(true)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside id="categories" className="md:col-span-1">
              <FilterSidebar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                selectedPriceTier={selectedPriceTier} 
                setSelectedPriceTier={setSelectedPriceTier} 
              />
            </aside>

            <section id="explore" className="md:col-span-3">
              {/* Pass the combined allModels array down */}
              <ModelGrid 
                models={allModels}
                selectedCategory={selectedCategory} 
                selectedPriceTier={selectedPriceTier} 
                onSelectModel={(model) => setSelectedModel(model)} 
              />
            </section>
          </div>
        </main>
      ) : (
        <main id="creators" className="max-w-7xl mx-auto px-4 py-8">
          <CreatorDashboard 
            onOpenSellModal={() => setIsSellModalOpen(true)} 
            listings={creatorListings}
            onDeleteListing={handleDeleteListing}
          />
        </main>
      )}

      <footer id="about" className="border-t border-slate-800 bg-slate-900/50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} AI Model Shop. All rights reserved.</p>
        </div>
      </footer>

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