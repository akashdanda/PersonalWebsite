import { personalInfo } from "../data/personal-info"
import { Mail, Linkedin, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{"Let's Connect"}</h3>
              <p className="text-gray-300 leading-relaxed">
                {"I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow developers. Feel free to reach out!"}
              </p>

            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Mail className="text-orange-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Linkedin className="text-orange-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <MapPin className="text-orange-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Urbana-Champaign, IL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
