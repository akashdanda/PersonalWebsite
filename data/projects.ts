export interface Project {
  title: string
  technologies: string[]
  duration: string
  description: string[]
  current?: boolean
  link?: string
}

export const projects: Project[] = [
    {
    title: "MapReduce Framework",
    technologies: ["Python", "Flask", "Multi-threading"],
    duration: "Nov. 2025",
    description: [
      "Engineered distributed MapReduce system with fault tolerance achieving 2.45x speedup across 3 worker nodes via heartbeat monitoring and automatic task reassignment",
      "Implemented hash-based partitioning to distribute 9M+ key-value pairs across reducers, coordinating map-shuffle-reduce phases via Flask APIs for parallel execution"
    ],
    link: "https://github.com/akashdanda/map_reduce"
  },
  {
    title: "Transformer Translator",
    technologies: ["Pytorch", "Hugging Face", "Tokenizers", "Tensorboard"],
    duration: "Aug. 2025 - Oct. 2025",
    description: [
      "Implemented a Transformer architecture from scratch in PyTorch for English Spanish translation, including encoder decoder framework, multi-head attention, feed-forward layers, and residual connections",
      "Built a custom bilingual dataset pipeline(93k sentence pairs) leveraging Hugging Faces opus books corpus with word-level tokenization, special tokens, and sequence padding for training",
      "Designed a PyTorch Dataset class with encoder, decoder, and causal masks for autoregressive translation training",
      "Developing training & validation pipelines with Adam optimizer & TensorBoard monitoring to track performance(Bleu: 27)"
    ],
    link: "https://github.com/akashdanda/Transformer"
  },
  {
    title: "Neural Letter Classifier",
    technologies: ["Python", "NumPy", "Matplotlib"],
    duration: "Sept. 2025",
    description: [
      "Built a feedforward neural network in Python from scratch to classify 5 by 6 pixel letters (A, B, C)",
      "Implemented forward/backpropagation and gradient descent with NumPy, reaching 99% accuracy",
      "Developed training utilities with accuracy/loss plots & visualizations, enabling performance tracking",
    ],
    link: "https://github.com/akashdanda/neural_network"
  },
    {
    title: "LicenseTracker",
    technologies: ["YOLOv11", "AWS Textract", "Streamlit", "AWS EC2", "Roboflow"],
    duration: "August 2025",
    description: [
      "Fine-tuned YOLOv11 on 10k+ license plate images, achieving mAP@50 of 0.96 for high-accuracy detection",
      "Built a real-time recognition system using AWS Textract and Streamlit for OCR-based output",
      "Deployed the system on AWS EC2; image storage and retrieval through AWS S3 buckets for scalability",
    ],
    link: "https://github.com/akashdanda/LicenseTracker"
  },
  {
    title: "SmartSend",
    technologies: ["JavaScript", "Chrome Extensions API", "Node.JS", "OpenAI API", "HTML", "CSS"],
    duration: "July 2025",
    description: [
      "Built Chrome extension with Manifest V3 for AI-driven email replies using the OpenAI API & DOM extraction",
      "Developed a Node.js + Express backend to securely route API calls and manage request handling",
    ],
    link: "https://github.com/akashdanda/SmartSend"
  },
  {
    title: "Therapist.AI",
    technologies: ["React", "Node.js", "Firebase", "HTML", "CSS", "GPT LLM API"],
    duration: "June 2025 - July 2025",
    description: [
      "Built AI-driven mental therapy platform using GPT LLM to facilitate interactive therapy sessions",
      "Utilized React and Node.js for full-stack development and Firebase for authentication/data storage",
    ],
    link: "https://github.com/akashdanda/TherapistAI"
  },
    {
    title: "Fitness Society",
    technologies: ["Django", "Chart.js", "HTML", "CSS"],
    duration: "Dec 2022 - Jan 2024",
    description: [
      "Built fitness based social network website so users could track fitness progress and record workouts"
    ],
    link: "https://github.com/akashdanda/FitnessSociety"
  },
      {
    title: "EcoBuddy",
    technologies: ["Java", "Android Studio", "Firebase"],
    duration: "Dec 2021 - Jan 2022",
    description: [
      "Developed Java-based Android app (worked in a team) using Firebase for data storage, enabling users to track their carbon footprint and learn about sustainability."
    ],
    link: "https://youtu.be/HuweR0DVppM"
  },
]
