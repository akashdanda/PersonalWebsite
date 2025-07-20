import { experiences } from "../data/experiences"
import { Calendar, Building } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gray-700 p-6 hover:border-orange-400 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    {exp.current && (
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Building size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.duration}</span>
                </div>
              </div>

              <div className="space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-gray-300 text-sm leading-relaxed">
                    • {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
