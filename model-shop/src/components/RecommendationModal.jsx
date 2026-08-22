import { useState } from 'react';

export default function RecommendationModal({ isOpen, onClose, models = [], onSelectModel }) {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    useCase: '',
    type: '',
    maxPrice: 500,
  });
  const [results, setResults] = useState([]);

  if (!isOpen) return null;

  const handleRecommend = () => {
    // Scoring logic based on user criteria
    const scoredModels = models.map((model) => {
      let score = 0;

      // Match Use Case / Category
      if (preferences.useCase && model.category?.toLowerCase().includes(preferences.useCase.toLowerCase())) {
        score += 50;
      }

      // Match Budget
      const modelPrice = typeof model.price === 'number' ? model.price : 0;
      if (modelPrice <= preferences.maxPrice) {
        score += 30;
      }

      // Match Rating / Quality
      score += (model.rating || 4) * 4;

      return { ...model, matchScore: Math.min(Math.round((score / 100) * 100), 99) };
    });

    // Sort by highest match score
    const topMatches = scoredModels.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
    setResults(topMatches);
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            ✨ AI Model Recommender
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>

        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                1. What are you building? (Use Case)
              </label>
              <select
                value={preferences.useCase}
                onChange={(e) => setPreferences({ ...preferences, useCase: e.target.value })}
                className="w-full rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-sm text-white"
              >
                <option value="">Select Primary Goal</option>
                <option value="LLMs">Chatbot / Text Processing</option>
                <option value="Code Generation">Code Assistant / Developer Tool</option>
                <option value="Image Generation">Graphics / Image Generation</option>
                <option value="Computer Vision">Object Detection / Vision</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                2. Max Budget (₹)
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={preferences.maxPrice}
                onChange={(e) => setPreferences({ ...preferences, maxPrice: Number(e.target.value) })}
                className="w-full accent-indigo-500"
              />
              <div className="text-right text-xs text-indigo-400 font-semibold">
                Up to ₹{preferences.maxPrice}
              </div>
            </div>

            <button
              type="button"
              onClick={handleRecommend}
              className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
            >
              Get Best Recommendations
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-300">Top Suggested Models for You:</h3>
            <div className="space-y-3">
              {results.map((model) => (
                <div
                  key={model.id}
                  onClick={() => {
                    onSelectModel(model);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-950 hover:border-indigo-500/50 cursor-pointer transition"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{model.title}</h4>
                    <p className="text-xs text-slate-400">{model.category} • ₹{model.price}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                    {model.matchScore}% Match
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="w-full text-xs text-slate-400 hover:text-white pt-2"
            >
              ← Adjust Requirements
            </button>
          </div>
        )}
      </div>
    </div>
  );
}