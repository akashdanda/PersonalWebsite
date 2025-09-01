import { Download } from "lucide-react"

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Download My Resume</h3>
              <p className="text-gray-300 mb-8">
                Get a comprehensive overview of my education, experience, and skills in a downloadable format.
              </p>
            </div>

<div className="flex justify-center">
  <a href="/AkashDanda_Resume.pdf" download>
    <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
      <Download size={20} />
      Download PDF
    </button>
  </a>
</div>


            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Last updated: September 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
