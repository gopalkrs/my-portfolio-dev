import { Rocket } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Projects = () => {

    const projectsList = [
        {
            id: 1,
            name: 'Bloggr',
            image: '',
            description: 'Blogr is a clean, modern blogging app that lets users write, edit, and share posts with ease. Perfect for quick publishing and personal expression.',
            githublink: 'https://github.com/gopalkrs/blogr-app-backend',
            techstack: ['Reactjs', 'Express', 'MongoDB', 'TipTap', 'Tailwind', 'Zustand', 'AWS S3 Bucket', 'Motion'],
            link: 'https://blogr-app-frontend.vercel.app/'
        },
        
        {
            id: 3,
            name: 'Tiketex',
            image: '',
            description: 'An event management system that allows users to create, manage, and track events with ease. It features user authentication, event creation, and payment integration.',
            githublink: 'https://github.com/gopalkrs/event-management-project',
            techstack: ['Next.js', 'React', 'NextAuth', 'Tailwind', 'Tanstack Query', 'Drizzle', 'Razorpay', 'Cloudinary'],
            link: 'https://tiketex.vercel.app/'
        },
        {
            id: 2,
            name: 'Debbit',
            image: '',
            description: 'Debbit is a simple expense tracker that helps users manage spending and stay on top of their finances with a clean, intuitive interface.',
            githublink: 'https://github.com/gopalkrs/finance-project-next-app',
            techstack: ['Next.js','Prisma', 'PostgreSQL', 'Clerk', 'Zod', 'Tailwind',],
            link: 'https://debbit-app.vercel.app/'
        },
    ];

    return (
        <motion.section 
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="my-5 mx-auto w-[80%] md:max-w-3xl">
            <h2 className="text-xl text-center mb-6 text-gray-200 font-bold">Projects</h2>
            <div className="flex flex-col gap-4">
                {projectsList.map((project) => (
                    <div key={project.id} className="p-4 border-gray-800 border-1 rounded-lg">
                        <div className="flex flex-row items-center justify-between my-2">
                            <h3 className="text-lg font-semibold text-gray-200">{project.name}</h3>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 text-yellow-400 bg-gray-700 text-xs px-2 py-1 rounded-xl">
                                Live 
                                <Rocket className="w-3 h-3" /> 
                            </a>
                        </div>
                        <p className="text-sm text-gray-300">{project.description}</p>
                        <hr className="border-t my-4 border-gray-700" />
                        <div className="mt-2 flex items-start gap-2">
                            <a href={project.githublink} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-2 py-1 rounded">
                                <FaGithub className="h-3 w-3" />
                                Source
                            </a>
                        </div>
                        <div className="mt-2 flex items-center flex-wrap flex-row gap-2">{project.techstack.map((tech, index) => (
                            <p className="bg-gray-900 text-xs text-gray-400 px-2 py-1 rounded-xl" key={index}>{tech}</p>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Projects