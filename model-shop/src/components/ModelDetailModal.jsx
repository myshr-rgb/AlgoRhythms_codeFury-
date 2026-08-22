export default function ModelDetailModal({ model, onClose }) {
  if (!model) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 max-w-lg w-full space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs text-slate-400">{model.creator}</span>
            <h3 className="text-xl font-bold">{model.title}</h3>
          </div>
          <span className="text-xs text-indigo-400 bg-indigo-950/50 px-2.5 py-1 rounded-full border border-indigo-800/50">
            {model.category}
          </span>
        </div>

        {/* Image Preview */}
        <div className="h-48 bg-slate-800 rounded-xl overflow-hidden">
          <img src={model.previewImage} alt={model.title} className="w-full h-full object-cover" />
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">
          {model.description}
        </p>

        {/* Features List */}
        {model.features && (
          <div className="space-y-1">
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Features</h5>
            <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
              {model.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800">
          <span className="text-emerald-400 font-semibold text-lg">
            {model.price === 0 ? 'Free' : `₹${model.price}`}
          </span>
          <div className="space-x-2">
            <button 
              onClick={onClose} 
              className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              Close
            </button>
            <a 
              href={model.demoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm transition-colors font-medium"
            >
              Get Model
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}