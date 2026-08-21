export default function FilterSidebar({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Image AI', 'Text AI', 'Audio AI', 'Code AI'];

  return (
    <aside className="w-full md:w-64 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Categories</h3>
      <div className="space-y-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory && setSelectedCategory(cat)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              selectedCategory === cat ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </aside>
  );
}