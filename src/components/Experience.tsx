import { BriefcaseBusiness } from "lucide-react"

const Experience = () => {
    return (
        <section className="mt-5 mx-auto w-[80%] md:max-w-3xl">
                <h2 className="text-xl text-center font-bold mb-6">Work Experience</h2>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 flex-row">
                        <BriefcaseBusiness className="w-5 h-5 text-gray-500" />
                        <div className="flex flex-col items-start gap-1">
                        <h3 className="text-sm font-bold">Tata Consultancy Services</h3>
                        <p className="text-gray-600 text-sm">Software Engineer</p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm">Mar 2021 - Present</p>

                </div>
        </section>
    )
}

export default Experience