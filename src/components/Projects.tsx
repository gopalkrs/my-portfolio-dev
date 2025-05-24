import { Link } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {

    const projectsList = [
        {
            id: 1,
            name: 'Bloggr',
            image: '',
            description: 'Blogr is a clean, modern blogging app that lets users write, edit, and share posts with ease. Perfect for quick publishing and personal expression.',
            githublink: 'https://github.com/gopalkrs/blogr-app-backend',
            techstack: ['Reactjs', 'Express', 'MongoDB', 'TipTap', 'Tailwind'],
            link: 'https://blogr-app-frontend.vercel.app/'
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
        {
            id: 3,
            name: 'FilmaticDB',
            image: '',
            description: 'This is the first project.',
            githublink: 'https://github.com/gopalkrs/movie-db-backend',
            techstack: ['Reactjs', 'MongoDB', 'Express'],
            link: 'https://filmaticdb.vercel.app/'
        },
    ];

    return (
        <section className="mt-5 mx-auto w-[80%] md:max-w-3xl">
            <h2 className="text-xl text-center font-bold mb-6">Projects</h2>
            <div className="flex flex-col gap-4">
                {projectsList.map((project) => (
                    <div key={project.id} className="p-4 bg-emerald-50 border-red-100 border-2 rounded-lg">
                        <h3 className="text-lg font-semibold">{project.name}</h3>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <hr className="border-t my-4 border-gray-200" />
                        <div className="mt-2 flex items-start gap-2">
                            <a href={project.githublink} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                <FaGithub className="h-3 w-3" />
                                Source
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                <Link className="h-3 w-3" />
                                Website
                            </a>
                        </div>
                        <div className="mt-2 flex items-center flex-wrap flex-row gap-2">{project.techstack.map((tech, index) => (
                            <p className="bg-red-300 text-xs text-white px-2 py-1 rounded-xl" key={index}>{tech}</p>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects