export interface Project {
  title: string
  technologies: string[]
  duration: string
  description: string[]
  current?: boolean
}

export const projects: Project[] = [
  {
    title: "SmartSend",
    technologies: ["JavaScript", "Chrome Extensions API", "Gmail.js", "Gemini API", "HTML", "CSS"],
    duration: "July 2025 - Present",
    current: true,
    description: [
      "Building a Chrome extension with Manifest V3 and JavaScript, integrating gmail.js to add AI features to Gmail",
      "Integrating Gemini's API and DOM manipulation to generate and summarize emails in real time",
    ],
  },
  {
    title: "Therapist.AI",
    technologies: ["React", "Node.js", "Firebase", "HTML", "CSS", "GPT LLM API"],
    duration: "June 2025 - July 2025",
    description: [
      "Built AI-driven mental therapy platform using GPT LLM to facilitate interactive therapy sessions",
      "Utilized React and Node.js for full-stack development and Firebase for authentication/data storage",
    ],
  },
    {
    title: "Fitness Society",
    technologies: ["Django", "Chart.js", "HTML", "CSS"],
    duration: "Dec 2022 - Jan 2024",
    description: [
      "Built fitness based social network website so users could track fitness progress and record workouts"
    ],
  },
      {
    title: "Earth Buddy",
    technologies: ["Java", "Android Studio", "Firebase"],
    duration: "Dec 2021 - Jan 2022",
    description: [
      "Developed Java-based Android app (worked in a team) using Firebase for data storage, enabling users to track their carbon footprint and learn about sustainability."
    ],
  },
]
