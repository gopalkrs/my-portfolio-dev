import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import TechSkills from "../components/TechSkills"

const Homepage = () => {
  return (
    <section className="relative max-w-3xl mx-auto">
        <AboutMe />
        <ContactMe/>
        <Experience />
        <Projects />
        <TechSkills />
    </section>
  )
}

export default Homepage