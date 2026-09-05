
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          Technical student passionate about software development, problem-solving, and building practical applications. I enjoy learning new technologies and turning ideas into simple, useful, and well-structured solutions.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I am currently strengthening my skills in Java, Data Structures and Algorithms, and React. I have been working with concepts such as arrays, HashMap, HashSet, sliding window, two pointers, stacks, queues, and other core problem-solving techniques, while also exploring modern web development.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I enjoy building projects that help me apply what I learn and improve my understanding of software development. I am continuously learning, solving problems, and looking for opportunities to grow as a software developer.
        </p>
        

      </motion.div>
    </div>
  );
}
