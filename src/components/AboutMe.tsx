import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import {motion} from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section 
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="container">
      <div className='flex shadow-lg flex-col sm:flex-row items-center text-center justify-center gap-5 md:gap-20 p-8 border border-gray-800 rounded-lg w-[80%] md:max-w-3xl mx-auto mt-10'>
        <div className="rounded-full my-4">
          <img className="rounded-full" width={100} height={100} src="/portfolio.jpg" alt="profile-pic" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-gray-200 text-md sm:text-xl">Gopal Choudhary</h1>
          <h2 className="text-gray-300 text-sm sm:text-md font-medium">Software Engineer</h2>
          <div className="flex flex-col items-start gap-2 mt-2">
          <a className="flex hover:text-gray-400 text-gray-300 items-center flex-row gap-1" href="mailto:gopalkrsch@gmail.com">
            <Mail className="w-4 h-4" /> 
            <p className=" text-xs sm:text-sm">gopalkrsch@gmail.com</p>
          </a>
          <a className="flex hover:text-gray-400 text-gray-300 items-center flex-row gap-1" href="https://www.linkedin.com/in/gopalkrs" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <p className="text-xs sm:text-sm">Linkedin</p>
          </a>
          <div className="flex items-center flex-row gap-1">
            <MapPin className="w-4 h-4 text-gray-200" />
            <span className="text-gray-300 text-xs sm:text-sm">Kolkata, India</span>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 space-y-8 w-[80%] md:max-w-3xl mx-auto">
        <h2 className="text-center text-gray-200 font-bold text-xl">About Me</h2>
        <p className="text-gray-300 text-sm sm:text-md">
        Hi, I'm Gopal 👋, I am a software engineer with a love for building interactive and scalable tech products and solvig real world problems through code, with expertise in React, Java, Javascript, typescript, Next.js I create seamless digital experiences that blend design, functionality, and performance. 🚀
        </p>
      </div>
    </motion.section>
  )
}

export default AboutMe;