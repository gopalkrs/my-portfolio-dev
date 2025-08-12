import { CgVercel } from "react-icons/cg"
import { DiGitBranch, DiJava, DiJavascript, DiMongodb, DiNodejs, } from "react-icons/di"
import { FaReact } from "react-icons/fa6"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiDrizzle, SiMysql, SiPostman, SiSpringboot, SiTypescript } from "react-icons/si";
import { motion } from 'framer-motion';

const TechSkills = () => {

  const techStack = [
    { name: 'JavaScript', icon: <DiJavascript />, color: 'text-yellow-500' },
    { name: 'Java', icon: <DiJava />, color: 'text-red-700' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
    { name: 'Next.js', icon: <RiNextjsFill />, color: 'text-gray-400' },
    { name: 'MongoDB', icon: <DiMongodb />, color: 'text-green-600' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-700' },
    { name: 'Tailwind', icon: <RiTailwindCssFill />, color: 'text-blue-400' },
    { name: 'Nodejs', icon: <DiNodejs />, color: 'text-yellow-600' },
    { name: 'Drizzle', icon: <SiDrizzle />, color: 'text-green-600' },
    { name: 'Git', icon: <DiGitBranch />, color: 'text-orange-500' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="my-8 mx-auto w-[80%] md:max-w-3xl">
      <div className="text-center my-5">
        <h2 className="inline-block text-gray-200 font-bold text-2xl relative after:block after:h-1 after:mt-2 after:bg-blue-800 after:rounded-full after:shadow-md">
          Tech <span className="text-blue-800">Skills</span>
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center bg-gray-900 gap-1 py-1 px-2 rounded-lg shadow-lg">
            <span className={`text-xl rounded-full ${tech.color}`}>{tech.icon}</span>
            <span className="text-xs font-normal text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>

    </motion.section>
  )
}

export default TechSkills