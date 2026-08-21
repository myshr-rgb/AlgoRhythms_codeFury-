import { mockCreatorStats } from '../data/mockModels';
import { useState } from 'react';


export default function SellModelModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    title: '',
    category: 'Image Generation',
    description: '',
    demoUrl: '',
    price: '',
    upiId: '',
  });

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(form);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">List Your Model</h1>
          <p className="mt-1 text-sm text-slate-400">
            Fill in the details below to publish your AI project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Model Title
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={updateField}
                  placeholder="AI Character Generator"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={updateField}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                >
                  <option>Image Generation</option>
                  <option>Text Generation</option>
                  <option>Audio</option>
                  <option>Video</option>
                  <option>Computer Vision</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Short Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={updateField}
                  placeholder="Share what it does or the idea behind it..."
                  rows={3}
                  required
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Demo Image URL
                </label>
                <input
                  name="demoUrl"
                  value={form.demoUrl}
                  onChange={updateField}
                  placeholder="https://www.demoimage.org"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Price (₹)
                </label>
                <input
                  name="price"
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={updateField}
                  placeholder="₹ 0"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your UPI ID
                </label>
                <input
                  name="upiId"
                  value={form.upiId}
                  onChange={updateField}
                  placeholder="yourname@upi"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                )}

                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold hover:bg-indigo-500"
                >
                  Finish
                </button>
              </div>
            </div>
          </form>

          <div>
            <h2 className="mb-3 text-lg font-bold">Live Preview</h2>
            <p className="mb-4 text-sm text-slate-400">
              See how your model will appear.
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              {form.demoUrl ? (
                <img
                  src={form.demoUrl}
                  alt="Model preview"
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-blue-500">
                  <span className="text-5xl">✦</span>
                </div>
              )}

              <div className="space-y-3 p-5">
                <h3 className="text-lg font-bold">
                  {form.title || 'AI Character Generator'}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Category
                </p>

                <p className="text-sm text-slate-400">
                  {form.description || 'Your model description will appear here.'}
                </p>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-sm text-slate-400">Price</span>
                  <span className="font-bold text-emerald-400">
                    ₹{form.price || '0'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}