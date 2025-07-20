import { personalInfo } from "../data/personal-info"
import { Mail, Linkedin } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hi, I'm <span className="text-orange-400">Akash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              {personalInfo.title} passionate about building innovative solutions with cutting-edge technology
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 hover:border-orange-400 text-gray-300 hover:text-orange-400 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="pt-8">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
                <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
