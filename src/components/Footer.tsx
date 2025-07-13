const Footer = () => {
  return (
        <footer className="py-4 my-10 mx-auto w-[80%] md:max-w-3xl space-y-5">
            <div className="text-center">
            <div className="text-center my-5">
                <h2 className="inline-block text-gray-200 font-bold text-2xl relative after:block after:h-1 after:mt-2 after:bg-blue-800 after:rounded-full after:shadow-md">
                    Get <span className="text-blue-800">in touch</span>
                </h2>
            </div>
                <p className="text-sm text-gray-400">
                I'm always open to discussing new opportunities, collaborations, or just chatting about tech, movies and sports. Drop me a message on my <a href='https://www.x.com/gopalkrss' className="text-blue-500 font-semibold hover:text-underline" target="blank">Twitter</a> See you there</p>
            </div>
            <div className="text-center mb-10">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Gopal Choudhary. All rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer