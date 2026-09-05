import { motion } from "framer-motion";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "Java",
      icon: <FaJava size={50} />,
    },
    {
      id: 2,
      name: "C++",
      icon: <SiCplusplus size={50} />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs size={50} />,
    },
    {
      id: 4,
      name: "React",
      icon: <FaReact size={50} />,
    },
    {
      id: 5,
      name: "Node.js",
      icon: <FaNodeJs size={50} />,
    },
    {
      id: 6,
      name: "Express.js",
      icon: <SiExpress size={50} />,
    },
    {
      id: 7,
      name: "MySQL",
      icon: <SiMysql size={50} />,
    },
    {
      id: 8,
      name: "MongoDB",
      icon: <SiMongodb size={50} />,
    },
    {
      id: 9,
      name: "Git",
      icon: <FaGitAlt size={50} />,
    },
    {
      id: 10,
      name: "Postman",
      icon: <SiPostman size={50} />,
    },
    {
      id: 11,
      name: "Python",
      icon: <FaPython size={50} />,
    },
    {
      id: 12,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} />,
    },
    {
      id: 13,
      name: "REST APIs",
      icon: <TbApi size={50} />,
    },
  ];

  const experiences = [
    {
      id: 1,
      company: "GeeksForGeeks",
      role: "Technical Coordinator",
      period: "Dec 2024 - Present",
      description:
        "As a Technical Coordinator for the GeeksforGeeks College Club, I contribute to organizing technical events, coding sessions, and workshops while helping students strengthen their programming and problem-solving skills.",
      logo: "/assets/gfg.jpg",
    },
    {
      id: 2,
      company: "Ardema",
      role: "Social Media Manager",
      period: "Dec 2024 - Feb 2025",
      description:
        "As a Social Media Manager for the Ardema College Club, I manage the club’s Instagram and LinkedIn handles, create and edit content including reels and event photography, and help coordinate and promote college events and activities.",
      logo: "/assets/Ardema.jpg",
    },
  ];

  return (
    <div className="mt-3 lg:mt-16" id="skills">

      {/* ==================== Skills Section ==================== */}
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">

          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}

              <p>{skill.name}</p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ==================== Experience Section ==================== */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">

        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >

              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">

                <div className="flex items-center gap-5">

                  <img
                    className="w-7 h-7 object-contain"
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                  />

                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>

                </div>

                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>

              </div>

              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}