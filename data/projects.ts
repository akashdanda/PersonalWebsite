export interface Project {
  title: string
  technologies: string[]
  duration: string
  description: string[]
  current?: boolean
  link: string
}

export const projects: Project[] = [
  {
    title: "SmartSend",
    technologies: ["JavaScript", "Chrome Extensions API", "Node.JS", "OpenAI API", "HTML", "CSS"],
    duration: "July 2025 - Present",
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
