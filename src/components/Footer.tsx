const Footer = () => {
  return (
        <footer className="py-4 my-10 mx-auto w-[80%] md:max-w-3xl space-y-5">
            <div className="text-center">
                <h2 className="font-bold my-5 text-xl">Get in touch</h2>
                <p className="text-sm text-gray-500">
                I'm always open to discussing new opportunities, collaborations, or just chatting about tech, movies and sports. Drop me a message on my <a href='https://www.x.com/gopalkrss' className="text-blue-500 font-semibold hover:text-underline" target="blank">Twitter</a> See you there</p>
            </div>
            <div className="text-center mb-10">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Gopal Choudhary. All rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer