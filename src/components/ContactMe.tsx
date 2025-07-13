import { File, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {motion} from 'framer-motion';


const ContactMe = () => {

    const socialLinks  = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/gopalkrs',
            icon: <FaLinkedin className="h-5 w-5" />
        },
        {
            name: 'X',
            url: 'https://www.x.com/gopalkrss',
            icon: <FaXTwitter className="w-5 h-5" />
        },
        {
            name: 'Github',
            url: 'https://www.github.com/gopalkrs',
            icon: <FaGithub className="w-5 h-5" />
        },
        {
            name: 'Email',
            url: 'mailto:gopalkrsch@gmail.com',
            icon: <Mail className="w-5 h-5" />
        },
        {
            name: 'Resume',
            url: 'https://drive.google.com/file/d/1tUZAaxtAeKRfGaP3nKg-MAdPnJA0W4xo/view?usp=drivesdk',
            icon: <File className="w-5 h-5" /> // Placeholder for resume icon
        }
    ]

  return (
    <motion.div 
        
        className="fixed z-500 bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row items-center justify-center gap-10 mt-10 shadow-lg rounded-full p-4 bg-blue-800">
        {socialLinks.map((link, index) => (
            <motion.a 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "anticipate", delay: index * 0.1 }}
                whileHover={{scale: 1.1, rotate: 10, transition: { duration: 0.2, delay: 0.1 } }}
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-300 hover:text-gray-400 transition-colors"
            >
                {link.icon}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default ContactMe