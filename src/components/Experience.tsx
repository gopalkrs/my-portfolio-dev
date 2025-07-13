import { BriefcaseBusiness } from "lucide-react"
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="my-8 mx-auto w-[80%] md:max-w-3xl">
            <div className="text-center my-5">
                <h2 className="inline-block text-gray-200 font-bold text-2xl relative after:block after:h-1 after:mt-2 after:bg-blue-800 after:rounded-full after:shadow-md">
                    Work <span className="text-blue-800">Experience</span>
                </h2>
            </div>
            <h2 className="text-xl font-bold mb-6 text-gray-200"></h2>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 flex-row">
                    <BriefcaseBusiness className="w-5 h-5 text-gray-300" />
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="text-sm text-gray-300 font-bold">Tata Consultancy Services</h3>
                        <p className="text-gray-300 text-sm">Software Engineer</p>
                    </div>
                </div>
                <p className="text-gray-300 text-sm">Mar 2021 - Present</p>

            </div>
        </motion.section>
    )
}

export default Experience