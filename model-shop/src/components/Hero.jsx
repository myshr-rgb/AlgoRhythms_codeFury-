export default function Hero({ onOpenSellModal }) {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 my-6 text-center">
      <h1 className="text-3xl font-extrabold text-white">AI Model Marketplace</h1>
      <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
        Discover and monetize custom fine-tuned AI models and LoRAs.
      </p>
      <button
        onClick={onOpenSellModal}
        className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2 rounded-xl text-sm"
      >
        Start Selling Today
      </button>
    </section>
  );
}