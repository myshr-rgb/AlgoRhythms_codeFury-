export default function ModelCard({ model, onSelectModel }) {
  return (
    <div 
      onClick={() => onSelectModel && onSelectModel(model)}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Preview Image */}
        <div className="h-40 bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
          <img 
            src={model?.previewImage} 
            alt={model?.title} 
            className="w-full h-full object-cover" 
          />
          <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-xs px-2 py-1 rounded-md text-slate-200">
            ★ {model?.rating || '5.0'}
          </span>
        </div>

        {/* Info */}
        <div className="text-xs text-slate-500 mb-1">{model?.creator}</div>
        <h4 className="text-white font-bold text-base line-clamp-1">{model?.title}</h4>
        <p className="text-slate-400 text-xs mt-1 line-clamp-2">
          {model?.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center text-xs pt-3 border-t border-slate-800/60">
        <span className="text-indigo-400 bg-indigo-950/40 px-2 py-1 rounded border border-indigo-800/30">
          {model?.category}
        </span>
        <span className="text-emerald-400 font-semibold text-sm">
          {model?.price === 0 ? 'Free' : `₹${model?.price}`}
        </span>
      </div>
    </div>
  );
}
