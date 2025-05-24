import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Experience from "../components/Experience"

const Homepage = () => {
  return (
    <section className="relative max-w-3xl mx-auto">
        <AboutMe />
        <ContactMe/>
        <Experience />
    </section>
  )
}

export default Homepage