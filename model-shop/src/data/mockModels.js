export const mockModels = [
  {
    id: "m1",
    title: "AI Portrait Pro LoRA",
    creator: "@aravind_ai",
    category: "Image AI",
    description: "Fine-tuned Stable Diffusion LoRA trained on 5,000+ studio portrait photos. Perfect for generating crisp, ultra-realistic headshots and cinematic portraits.",
    priceTier: "₹99 - ₹500",
    price: 299,
    isFree: false,
    rating: 4.9,
    reviewsCount: 42,
    salesCount: 128,
    previewImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
    features: [
      ".safetensors file format (512MB)",
      "Includes 15 target prompt templates & negative prompts",
      "Compatible with Automatic1111 & ComfyUI",
      "Full commercial usage rights included"
    ],
    demoUrl: "https://huggingface.co/models",
    upiId: "aravind@upi"
  },
  {
    id: "m2",
    title: "SEO Blog Post Generator Pro",
    creator: "@copy_master",
    category: "Text AI",
    description: "An optimized system prompt and Llama-3 fine-tune crafted for generating ranking-ready 2,000-word blog posts complete with headers, FAQs, and meta tags.",
    priceTier: "Free",
    price: 0,
    isFree: true,
    rating: 4.8,
    reviewsCount: 19,
    salesCount: 412,
    previewImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&auto=format&fit=crop",
    features: [
      "Compatible with ChatGPT, Claude, and Ollama",
      "Includes keyword density optimization parameters",
      "Formats automatically in Markdown"
    ],
    demoUrl: "https://huggingface.co/models",
    upiId: "copymaster@upi"
  },
  {
    id: "m3",
    title: "Hindi Voice Cloner Model",
    creator: "@dev_sharma",
    category: "Audio AI",
    description: "High-clarity TTS model fine-tuned on clear conversational Indian accent Hindi speech dataset. Ideal for dubbing, podcasts, and automated narrations.",
    priceTier: "₹500+",
    price: 699,
    isFree: false,
    rating: 4.7,
    reviewsCount: 14,
    salesCount: 54,
    previewImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop",
    features: [
      "Bark & XTTS v2 compatible checkpoint",
      "Includes noise-cleared audio training sample clips",
      "Commercial usage allowed"
    ],
    demoUrl: "https://huggingface.co/models",
    upiId: "devsharma@upi"
  },
  {
    id: "m4",
    title: "React Component Copilot",
    creator: "@shrusti_dev",
    category: "Code AI",
    description: "DeepSeek Coder fine-tuned specifically for modern React (Tailwind CSS, TypeScript, Lucide Icons). Writes clean, accessible components instantly.",
    priceTier: "₹99 - ₹500",
    price: 399,
    isFree: false,
    rating: 5.0,
    reviewsCount: 31,
    salesCount: 95,
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    features: [
      "GGUF format for local execution on VS Code / Ollama",
      "Tailwind CSS v3 component library presets included",
      "Zero boilerplate, production-ready outputs"
    ],
    demoUrl: "https://huggingface.co/models",
    upiId: "shrusti@upi"
  }
];

export const mockCreatorStats = {
  creatorHandle: "@shrusti_dev",
  totalEarnings: 12450,
  totalViews: 4821,
  totalSales: 67,
  listedModels: [
    {
      id: "m4",
      title: "React Component Copilot",
      category: "Code AI",
      price: "₹399",
      sales: "32 sales",
      status: "Active"
    },
    {
      id: "m5",
      title: "FastAPI Backend Boilerplate Prompt",
      category: "Text AI",
      price: "FREE",
      sales: "421 views",
      status: "Active"
    }
  ]
};