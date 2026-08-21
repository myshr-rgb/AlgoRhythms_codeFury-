import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterSidebar from './components/FilterSidebar';
import ModelGrid from './components/ModelGrid';
import ModelDetailModal from './components/ModelDetailModal';
import SellModelModal from './components/SellModelModal';
import CreatorDashboard from './components/CreatorDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('marketplace'); // 'marketplace' or 'dashboard'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceTier, setSelectedPriceTier] = useState('All');
  const [selectedModel, setSelectedModel] = useState(null);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [models, setModels] = useState([]);

  const handleAddModel = (newModel) => {
    setModels((currentModels) => [
      ...currentModels,
      {
        ...newModel,
        id: Date.now(),
        sales: 0,
        status: 'Active',
      },
    ]);

    setIsSellModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Global Navigation Bar */}
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        onOpenSellModal={() => setIsSellModalOpen(true)} 
      />

      {currentView === 'marketplace' ? (
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          {/* Hero Banner */}
          <Hero onOpenSellModal={() => setIsSellModalOpen(true)} />

          {/* Main Marketplace Area */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <aside className="md:col-span-1">
              <FilterSidebar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                selectedPriceTier={selectedPriceTier} 
                setSelectedPriceTier={setSelectedPriceTier} 
              />
            </aside>

            {/* Model Card Grid */}
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
        /* Creator Dashboard View */ 
        <main className="max-w-7xl mx-auto px-4 py-8">
          <CreatorDashboard onOpenSellModal={() => setIsSellModalOpen(true)} />
        </main>
      )}

      {/* Pop-up Modals */}
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