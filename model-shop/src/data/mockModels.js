const mockModels = [
  {
    id: 1,
    name: "Resume Builder AI",
    description: "AI model that helps create professional resumes.",
    category: "Productivity",
    price: 499,
    author: "Alex Johnson",
    rating: 4.8,
    downloads: 1240,
    tags: ["AI", "Resume", "Productivity"],
    specs: {
      modelType: "Text Generation",
      version: "1.2.0",
      size: "250 MB",
      framework: "Python"
    },
    prompts: [
      "Create a professional resume for a software engineer.",
      "Improve this resume summary.",
      "Generate a resume for a fresh graduate."
    ]
  },

  {
    id: 2,
    name: "Image Generator Pro",
    description: "Generate creative images using simple text prompts.",
    category: "Image Generation",
    price: 799,
    author: "Sarah Williams",
    rating: 4.9,
    downloads: 2450,
    tags: ["AI", "Images", "Creative"],
    specs: {
      modelType: "Image Generation",
      version: "2.1.0",
      size: "1.4 GB",
      framework: "PyTorch"
    },
    prompts: [
      "Generate a futuristic city at sunset.",
      "Create a minimalist product advertisement.",
      "Generate a fantasy landscape."
    ]
  },

  {
    id: 3,
    name: "Code Assistant AI",
    description: "AI assistant designed to help developers write better code.",
    category: "Programming",
    price: 999,
    author: "Daniel Smith",
    rating: 4.7,
    downloads: 3180,
    tags: ["Coding", "Python", "JavaScript"],
    specs: {
      modelType: "Code Generation",
      version: "3.0.1",
      size: "800 MB",
      framework: "TensorFlow"
    },
    prompts: [
      "Explain this Python code.",
      "Fix the bug in this JavaScript function.",
      "Convert this Python code to C."
    ]
  },

  {
    id: 4,
    name: "Marketing Copy AI",
    description: "Generate engaging marketing content for your business.",
    category: "Marketing",
    price: 599,
    author: "Emma Brown",
    rating: 4.6,
    downloads: 890,
    tags: ["Marketing", "Copywriting", "Business"],
    specs: {
      modelType: "Text Generation",
      version: "1.5.0",
      size: "420 MB",
      framework: "Python"
    },
    prompts: [
      "Write an Instagram caption for a new product.",
      "Create a product description.",
      "Write a promotional email."
    ]
  }
];

export default mockModels;