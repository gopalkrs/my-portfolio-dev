import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"

const Homepage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
        <AboutMe />
        <ContactMe/>
    </section>
  )
}

export default Homepage