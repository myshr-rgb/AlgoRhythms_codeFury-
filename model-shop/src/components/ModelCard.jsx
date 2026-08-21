export default function ModelCard({ model, onSelectModel }) {
  return (
    <div 
      onClick={() => onSelectModel && onSelectModel(model)}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all cursor-pointer"
    >
      <div className="h-40 bg-slate-800 rounded-xl mb-4 flex items-center justify-center text-slate-500 text-sm">
        [ Model Preview ]
      </div>
      <h4 className="text-white font-bold">{model?.title || 'Model Title Placeholder'}</h4>
      <p className="text-slate-400 text-xs mt-1 line-clamp-2">
        {model?.description || 'Sample AI model description...'}
      </p>
      <div className="mt-4 flex justify-between items-center text-xs">
        <span className="text-indigo-400">{model?.category || 'Image AI'}</span>
        <span className="text-emerald-400 font-semibold"> {model?.price ? `₹${model.price}` : 'Free'} </span>
      </div>
    </div>
  );
}
