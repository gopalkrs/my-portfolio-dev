import { MapPin } from "lucide-react";
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container">
      <div className='flex shadow-lg flex-col sm:flex-row items-center text-center justify-center gap-5 md:gap-20 p-8 border border-gray-800 rounded-lg w-[80%] md:max-w-3xl mx-auto mt-10'>
        <div className="w-30 sm:w-40 aspect-square rounded-full overflow-hidden flex-shrink-0">
          <img className="w-full h-full object-cover" src="/portfolio2.jpg" alt="profile-pic" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className=" text-gray-200 text-2xl sm:text-2xl">Gopal Choudhary</h1>
          <div className="flex flex-row items-center justify-between gap-2">
            <h2 className="text-gray-400 text-sm sm:text-md font-normal">Software Engineer</h2>
            <div className="flex items-center flex-row sm:gap-1">
              <MapPin className="w-3 h-3 text-gray-600" />
              <span className="text-gray-600 text-xs sm:text-sm">Kolkata, India</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <p className="text-left text-gray-300 text-sm sm:text-md">
              Hi, I'm <span className="text-gray-50 font-extrabold">Gopal👋</span>, a software developer with a love for building interactive and scalable tech products and solving real world problems through code,
              currently working as a software developer with 3+ years of experience in Reactjs, Java, Javascript, Nextjs and MySQL.
            </p>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default AboutMe;