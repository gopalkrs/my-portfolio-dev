import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <section className="container">
      <div className='flex shadow-lg flex-col sm:flex-row items-center text-center justify-center gap-5 md:gap-20 p-8 bg-white rounded-lg w-[80%] md:max-w-3xl mx-auto mt-10'>
        <div className="rounded-full bg-gray-200 my-4">
          <img className="rounded-full" width={100} height={100} src="/portfolio.jpg" alt="profile-pic" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-md sm:text-xl">Gopal Choudhary</h1>
          <h2 className="text-gray-500 text-sm sm:text-md font-semibold">Software Engineer</h2>
          <div className="flex flex-col items-start gap-2 mt-2">
          <a className="flex hover:text-gray-600 text-gray-500 items-center flex-row gap-1" href="mailto:gopalkrsch@gmail.com">
            <Mail className="w-4 h-4" /> 
            <p className=" text-xs sm:text-sm">gopalkrsch@gmail.com</p>
          </a>
          <a className="flex hover:text-gray-600 text-gray-500 items-center flex-row gap-1" href="https://www.linkedin.com/in/gopalkrs" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <p className="text-xs sm:text-sm">Linkedin</p>
          </a>
          <div className="flex items-center flex-row gap-1">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500 text-xs sm:text-sm">Kolkata, India</span>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 space-y-8 w-[80%] md:max-w-3xl mx-auto">
        <h2 className="text-center font-bold text-xl">About Me</h2>
        <p className="text-gray-600 text-sm sm:text-md">
        Hi, I'm Gopal 👋, I am a software engineer with a love for building interactive and scalable tech products. With expertise in React, Next.js, Javascript/Typescript and backend tech, I create seamless digital experiences that blend design, functionality, and performance. 🚀

          Currently, I'm exploring more on backend development skills to build scalable SaaS applications.
        </p>
      </div>
    </section>
  )
}

export default AboutMe;