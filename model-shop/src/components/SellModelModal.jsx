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
          {/* Light-themed Form Card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl text-slate-900"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Model Title
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={updateField}
                  placeholder="AI Character Generator"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={updateField}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
                >
                  <option className="bg-white text-slate-900">Image Generation</option>
                  <option className="bg-white text-slate-900">Text Generation</option>
                  <option className="bg-white text-slate-900">Audio</option>
                  <option className="bg-white text-slate-900">Video</option>
                  <option className="bg-white text-slate-900">Computer Vision</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Short Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={updateField}
                  placeholder="Share what it does or the idea behind it..."
                  rows={3}
                  required
                  className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Demo Image URL
                </label>
                <input
                  name="demoUrl"
                  value={form.demoUrl}
                  onChange={updateField}
                  placeholder="https://www.demoimage.org"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
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
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your UPI ID
                </label>
                <input
                  name="upiId"
                  value={form.upiId}
                  onChange={updateField}
                  placeholder="yourname@upi"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>

              <div className="flex gap-3 pt-2">
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                )}

                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition shadow-sm"
                >
                  Finish
                </button>
              </div>
            </div>
          </form>

          <div>
            <h2 className="mb-3 text-lg font-bold text-white">Live Preview</h2>
            <p className="mb-4 text-sm text-slate-400">
              See how your model will appear.
            </p>

            {/* Light-themed Preview Card */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl text-slate-900">
              {form.demoUrl ? (
                <img
                  src={form.demoUrl}
                  alt="Model preview"
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-200">
                  <span className="text-5xl text-indigo-600">✦</span>
                </div>
              )}

              <div className="space-y-3 p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {form.title || 'AI Character Generator'}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Category
                </p>

                <p className="text-sm text-slate-600">
                  {form.description || 'Your model description will appear here.'}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm text-slate-500">Price</span>
                  <span className="font-bold text-emerald-600">
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