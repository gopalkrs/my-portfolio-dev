import { File, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
            url: 'https://drive.google.com/file/d/1zHrlaWLbDoA7eISu-C7XZwXiPrdLBKpn/view?usp=drivesdk',
            icon: <File className="w-5 h-5" /> // Placeholder for resume icon
        }
    ]

  return (
    <div className="fixed z-500 bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row items-center justify-center gap-10 mt-10 shadow-lg rounded-full p-4 bg-white">
        {socialLinks.map((link, index) => (
            <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
                {link.icon}
            </a>
        ))}
    </div>
  )
}

export default ContactMe