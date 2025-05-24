import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Experience from "../components/Experience"
import Projects from "../components/Projects"

const Homepage = () => {
  return (
    <section className="relative max-w-3xl mx-auto">
        <AboutMe />
        <ContactMe/>
        <Experience />
        <Projects />
    </section>
  )
}

export default Homepage