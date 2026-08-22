import ModelCard from "./ModelCard";

function ModelGrid({ models = [], onModelSelect }) {
  if (models.length === 0) {
    return (
      <section className="model-grid-empty">
        <h2>No models found</h2>
        <p>Try adjusting your filters or search terms.</p>
      </section>
    );
  }

  return (
    <section className="model-grid">
      {models.map((model) => (
        <div
          key={model.id || model.name}
          onClick={() => onModelSelect?.(model)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              onModelSelect?.(model);
            }
          }}
          role={onModelSelect ? "button" : undefined}
          tabIndex={onModelSelect ? 0 : undefined}
        >
          <ModelCard model={model} />
        </div>
      ))}
    </section>
  );
}

export default ModelGrid;