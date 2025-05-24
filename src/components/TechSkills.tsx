import { CgVercel } from "react-icons/cg"
import { DiGitBranch, DiJava, DiJavascript, DiMongodb, DiPostgresql, DiRedis } from "react-icons/di"
import { FaCloudflare, FaReact } from "react-icons/fa6"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiMysql, SiPostman, SiPrisma, SiTypescript } from "react-icons/si"

const TechSkills = () => {

  const techStack=[
    { name: 'JavaScript', icon: <DiJavascript />, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
    { name: 'Next.js', icon: <RiNextjsFill />, color: 'text-gray-800' },
    { name: 'PostgreSQL', icon: <DiPostgresql />, color: 'text-blue-700' },
    { name: 'MongoDB', icon: <DiMongodb />, color: 'text-green-600' },
    { name: 'Tailwind', icon: <RiTailwindCssFill />, color: 'text-blue-400' },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-600' },
    { name: 'Prisma', icon: <SiPrisma />, color: 'text-purple-600' },
    { name: 'Vercel', icon: <CgVercel />, color: 'text-black' },
    { name: 'Redis', icon: <DiRedis />, color: 'text-red-600' },
    { name: 'Git', icon: <DiGitBranch />, color: 'text-orange-500' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
    { name: 'Cloudflare', icon: <FaCloudflare />, color: 'text-yellow-600' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
    { name: 'Java', icon: <DiJava />, color: 'text-red-700' },
  ]

  return (
    <section className="mt-5 mx-auto w-[80%] md:max-w-3xl">
      <h2 className="text-xl text-center font-bold mb-6">Tech Skills</h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center bg-white gap-1 py-1 px-2 rounded-lg shadow-lg">
            <span className={`text-xl rounded-full ${tech.color}`}>{tech.icon}</span>
            <span className="text-xs font-medium">{tech.name}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default TechSkills