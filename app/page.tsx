import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import ExperienceSection from "../components/experience-section"
import ResumeSection from "../components/resume-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
