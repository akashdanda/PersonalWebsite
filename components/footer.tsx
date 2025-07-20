import { personalInfo } from "../data/personal-info"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">© 2025 {personalInfo.name}. Built with React and Tailwind CSS.</p>
          <p className="text-gray-500 text-xs mt-2">Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
