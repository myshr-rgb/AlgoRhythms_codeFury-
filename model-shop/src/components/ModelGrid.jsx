import ModelCard from './ModelCard';
import { mockModels } from '../data/mockModels';

export default function ModelGrid({ selectedCategory, selectedPriceTier, onSelectModel }) {
  // Filter models based on category and priceTier from your dataset
  const filteredModels = mockModels.filter((model) => {
    const categoryMatch = 
      selectedCategory === 'All' || model.category === selectedCategory;

    const priceMatch = 
      selectedPriceTier === 'All' || model.priceTier === selectedPriceTier;

    return categoryMatch && priceMatch;
  });

  if (filteredModels.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
        No models found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredModels.map((model) => (
        <ModelCard 
          key={model.id} 
          model={model} 
          onSelectModel={onSelectModel} 
        />
      ))}
    </div>
  );
}