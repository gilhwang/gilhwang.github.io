"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa" 

/* Social links */
const socialLinks = [
    {
        name: "github",
        icon: <FaGithub className="text-gray-600 hover:text-gray-700 text-3xl"/>,
        path: "https://github.com/gilhwang"
    },
    {
        name: "linkedin",
        icon: <FaLinkedin className="text-gray-600 hover:text-gray-700 text-3xl"/>,
        path: "https://www.linkedin.com/in/gil-hwang/"
    }
]

export default function SocialLinks() {
    return (
        <div className="flex space-x-4">
                <ul className="flex mt-5 space-x-3">
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                href={link.path}
                                target="_blank"
                            >
                                {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>
                <button 
                    className="px-6 py-2 mt-4 mr-4 sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-gray-400 hover:via-purple-400 hover:to-pink-400 text-white"
                >
                    <a href="/files/Gil-Hwang-Resume.pdf" download="Gil-Hwang-Resume.pdf">
                        Get Resume
                    </a>
                </button>
        </div>
    )
}