export interface Experience {
  title: string
  company: string
  duration: string
  description: string[]
  current?: boolean
}

export const experiences: Experience[] = [
    {
    title: "AI Researcher",
    company: "University of Illinois at Urbana-Champaign",
    duration: "Sept 2025 - Present",
    current: true,
    description: [ "Incoming"
    ],
  },

  {
    title: "Software Intern",
    company: "Tightrope Interactive",
    duration: "May 2025 - Aug 2025",
    description: [
      "Creating LLM-powered APIs in Python with Streamlit to summarize and validate over 100K PDFs",
      "Boosted token efficiency & throughput by 110% via batch processing",
      "Training YOLOv11 model on 17k+ PDFS to detect text layout types & optimize downstream OCR performance", 
      "Leveraging Docker for scalable deployment",
      "Validating & labeling financial documents to uptrain custom OCR models on GCP, achieving a 0.91 F1 score",
      "Integrated Azure Document Processing and Google Cloud Vision SDKs to manage large-scale document workflows"
    ],
  },
  {
    title: "Software Engineer",
    company: "Disruption Lab at Gies",
    duration: "Aug. 2024 - Present",
    current: true,
    description: [
      "Developed real-time lip synchronization algorithm for VR by analyzing the volume of WAV outputs from TTS API",
      "Optimized player movement in Unity by implementing C# scripts improving frame rate stability by 25%",
      "Leveraged Hugging Face STT & OpenAI LLM API for real-time voice recognition & AI based text interpretation",
      "Implemented a graph backend with Neo4j to optimize client project management & dependency tracking, decreasing client task completion time by 20%",
      "Built a frontend using React, Next.js, and Tailwind CSS to provide interactive visualization for projects"
    ],
  },
  {
    title: "Software Lead & Vice President",
    company: "FIRST Robotics 9125",
    duration: "Aug. 2022 - Aug. 2024",
    description: [
      "Enhanced autonomous scoring by 100% through the integration of computer vision algorithms and control loops",
      "Led a team of 7 developers to design scalable software architectures with Java",
      "Optimized P.I.D. efficiency and decreased latency by 30%",
    ],
  },
  {
    title: "Software Intern",
    company: "Enscale.Bio",
    duration: "June 2023 - Aug. 2023",
    description: [
      "Analyzed bioreactor data with PostgreSQL & MQTT protocol for real time insights",
      "Assisted in developing dynamic web interfaces with AngularJS and HTML/CSS, enhancing user experience",
    ],
  },
  {
    title: "Published Researcher",
    company: "Curieux Academic Journal",
    duration: "June 2022 - July 2023",
    description: [
      "Benchmarked machine learning models for obesity classification through 13 factors",
      "Optimized data preprocessing for 2000+ individuals with Pandas/Numpy/Scikit-Learn",
    ],
  },
]
