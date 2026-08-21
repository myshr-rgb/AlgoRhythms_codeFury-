export default function ModelDetailModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 max-w-md w-full">
        <h3 className="text-lg font-bold">Model Details</h3>
        <button onClick={onClose} className="mt-4 bg-slate-800 px-4 py-2 rounded text-sm">Close</button>
      </div>
    </div>
  );
}