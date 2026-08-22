import ModelCard from './ModelCard';

export default function ModelGrid({ 
  models = [], 
  selectedCategory, 
  selectedPriceTier, 
  onSelectModel 
}) {
  const filteredModels = models.filter((model) => {
    const matchesCategory = 
      selectedCategory === 'All' || model.category === selectedCategory;
    const matchesPrice = 
      selectedPriceTier === 'All' || model.priceTier === selectedPriceTier;

    return matchesCategory && matchesPrice;
  });

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