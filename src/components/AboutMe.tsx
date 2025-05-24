import { LocateIcon, LocationEdit, Mail, MapPin } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="container">
      <div className='flex shadow-lg flex-col sm:flex-row items-center text-center justify-center gap-5 md:gap-20 p-8 bg-white rounded-lg w-[80%] md:max-w-3xl mx-auto mt-10'>
        <div className="rounded-full w-32 h-32 bg-gray-200 my-4">
          <img width={100} height={100} src="https://gravatar.com/avatar/771933a80c225f0f13b0ba474080c5b7?s=400&d=robohash&r=x" alt="profile-pic" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-md sm:text-xl">Gopal Choudhary</h1>
          <h2 className="text-gray-500 text-sm sm:text-md font-semibold">Software Engineer</h2>
          <div className="flex flex-col items-start gap-2 mt-2">
          <div className="flex items-center flex-row gap-1">
            <Mail className="w-5 h-5 text-gray-500" /> 
            <p className="text-gray-500 text-xs sm:text-sm">gopalkrsch@gmail.com</p>
          </div>
          <div className="flex items-center flex-row gap-1">
            <MapPin className="w-5 h-5 text-gray-500" />
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