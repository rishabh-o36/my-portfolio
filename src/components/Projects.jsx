
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "ChatApp",
    description:
      "A real-time chat application built with React and Node.js, featuring instant messaging, user authentication, and a clean, responsive UI.",
    image: "/assets/project.png",
    link: "chat-app-five-bice-33.vercel.app",
  },
  {
    id: 2,
    title: "Smart Safar",
    description:
      "SmartSafar is a web application designed to make travel planning simple and convenient. It helps users explore destinations, discover travel options, and organize their journeys through an easy-to-use and responsive interface. The project focuses on creating a practical travel experience while applying modern web development concepts.",    
    image: "/assets/project1.png",
    link: "https://github.com/rishabh-o36/Smart-Safar",
  },
  {
    id: 3,
    title: "AI Powered Autonomous Code Debugger",
    description:
      "The Next-Generation Autonomous AI Debugger. AgentSmiths identifies, diagnoses, and repairs logical flaws and bugs in your codebase before they hit production. It leverages advanced AI algorithms to analyze code, detect anomalies, and provide actionable insights for developers, ensuring a seamless and efficient debugging process.",
    image: "/assets/project2.png",
    link: "https://github.com/rishabh-o36/agentic-ai-debugger",
  },
  
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
