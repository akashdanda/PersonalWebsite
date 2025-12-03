export interface Experience {
  title: string
  company: string
  duration: string
  description: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Expertly.AI",
    duration: "Sept 2025 - Present",
    current: true,
    description: ["AI workflow tools"
    ],
  },
    {
    title: "Computer Vision Researcher",
    company: "University of Illinois at Urbana-Champaign",
    duration: "Sept 2025 - Nov 2025",
    current: true,
    description: [ "Visual Query Localization: Region Encoder Network"
    ],
  },
  {
    title: "Software Engineer",
    company: "Disruption Lab at Gies",
    duration: "Aug. 2024 - Present",
    current: true,
    description: [
      "Computer Vision ID Verification System",
      "Fullstack: Project Portfolio Management System",
      "Virtual Reality: Virtual Office Hours"
    ],
  },
  {
    title: "Software Intern",
    company: "Tightrope Interactive",
    duration: "May 2025 - Aug 2025",
    description: [
      "Financial Data Processing",
      "OCR + Cloud Services + LLMs"
    ],
  },
  {
    title: "Software Lead & Vice President",
    company: "FIRST Robotics 9125",
    duration: "Aug. 2022 - Aug. 2024",
    description: [
      "PID + Computer Vision + Autonomy",
    ],
  },
  {
    title: "Software Intern",
    company: "Enscale.Bio",
    duration: "June 2023 - Aug. 2023",
    description: [
      "MQTT Protocol + Bioreactor",
      "Frontend Development"
    ],
  },
  {
    title: "Published Researcher",
    company: "Curieux Academic Journal",
    duration: "June 2022 - July 2023",
    description: [
      "Machine Learning Obesity Classification"
    ],
  },
]
