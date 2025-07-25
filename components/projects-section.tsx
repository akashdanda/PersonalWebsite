import { projects } from "../data/projects"
import { Calendar, Code, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-orange-400 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.current && (
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    Current
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                <span className="text-sm">{project.duration}</span>
              </div>

              <div className="space-y-3 mb-6">
                {project.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-gray-300 text-sm leading-relaxed">
                    • {desc}
                  </p>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Code size={16} className="text-orange-400" />
                <span className="text-sm font-medium text-orange-400">Technologies:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-orange-400 hover:underline"
                >
                  View Project <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
