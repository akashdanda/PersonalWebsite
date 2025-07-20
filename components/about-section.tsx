import { personalInfo, skills } from "../data/personal-info"
import { GraduationCap, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300 font-medium">{personalInfo.university}</p>
                <p className="text-gray-400">{personalInfo.degree}</p>
                <p className="text-orange-400 font-medium">GPA: {personalInfo.gpa}</p>
                <p className="text-gray-400">Expected Graduation: {personalInfo.graduationDate}</p>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Achievements</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.achievements.map((achievement, index) => (
                  <span key={index} className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.coursework.map((course, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-orange-500/20 text-orange-400 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
