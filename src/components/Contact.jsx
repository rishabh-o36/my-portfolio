// import  { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { BiLogoGmail } from 'react-icons/bi';
// import { BsGithub } from 'react-icons/bs';
// import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
// import { IoMdMail } from "react-icons/io";
// import { FaPhone } from "react-icons/fa6";

// export default function Contact() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.8 }}
//       className='lg:my-16 lg:px-28 my-8 px-5'
//       id='contact'
//     >
//       <motion.h2
//         initial={{ y: -50, opacity: 0 }}
//         animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8 }}
//         className='text-2xl lg:text-4xl text-center'
//       >
//         Contact <span className='font-extrabold'>Me</span>
//       </motion.h2>

//       <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className='lg:w-[40%]'
//         >
//           <form className='w-full space-y-3 lg:space-y-5'>
//             <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your name' required />
//             <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="email" placeholder='Email' required />
//             <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your website (If exists)' />
//             <textarea className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A]  rounded text-sm w-full' placeholder='How can I help?*'></textarea>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 type='submit'
//                 className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
//               >
//                 Get In Touch
//               </motion.button>

//               <div className='flex items-center gap-x-2 lg:gap-x-5'>
//                 {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map((Icon, index) => (
//                   <motion.a
//                     key={index}
//                     href="#"
//                     className="bg-white p-2 lg:p-3 rounded border-2 border-black"
//                     whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           </form>
//         </motion.div>

//         <motion.div
//           initial={{ x: 50, opacity: 0 }}
//           animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className='lg:w-1/2'
//         >
//           <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
//             <h2>Let us <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>build</span> for</h2>
//             <h2>Something impactful</h2>
//           </div>

//           <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>Have an idea, an opportunity, or just want to connect? I am always open to discussing new projects, technology, and interesting problems. Feel free to reach out, and I will get back to you as soon as I can.</p>

//           <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
//             <motion.a
//               whileHover={{ x: 5 }}
//               className='flex items-center gap-2 group'
//               href="mailto:ry007914@gmail.com"
//             >
//               <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
//                 <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
//               </span>
//               ry007914@gmail.com
//             </motion.a>

//             <motion.a
//               whileHover={{ x: 5 }}
//               className='flex items-center gap-2 group'
//               href="tel:+91 7836081879"
//             >
//               <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
//                 <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
//               </span>
//               +91 7836081879
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rishabh-yadav-dev/',
      handle: 'LinkedIn',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/rishabh-o36',
      handle: 'GitHub',
    },
    {
      name: 'Email',
      href: 'mailto:ry007914@gmail.com',
      handle: 'ry007914@gmail.com',
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex flex-col items-start justify-center bg-white px-5 sm:px-8 lg:px-28 py-12"
      aria-labelledby="contact-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start justify-center text-left max-w-5xl mx-auto w-full"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2
            id="contact-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight"
          >
            Connect
            <br />
            <span
              className="text-white"
              style={{ WebkitTextStroke: '1.5px black' }}
            >
              With Me
            </span>
          </h2>

          <p className="mt-5 text-[#71717A] text-sm sm:text-base max-w-xl">
            Have an idea, an opportunity, or just want to connect? I am always
            open to discussing new projects, technology, and interesting
            problems.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-col gap-7 mb-14">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={
                link.name !== 'Email'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="relative inline-block">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-black group-hover:text-[#71717A] transition-colors">
                    {link.name}
                  </span>

                  <span className="text-sm text-[#71717A]">
                    {link.handle}
                  </span>
                </div>

                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-black transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-3 mb-16"
        >
          <motion.a
            whileHover={{ x: 5 }}
            href="mailto:ry007914@gmail.com"
            className="text-base sm:text-lg font-semibold text-black hover:text-[#71717A] transition-colors"
          >
            ✉&nbsp; ry007914@gmail.com
          </motion.a>

          <motion.a
            whileHover={{ x: 5 }}
            href="tel:+917836081879"
            className="text-base sm:text-lg font-semibold text-black hover:text-[#71717A] transition-colors"
          >
            ☎&nbsp; +91 9336753148
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full pt-8 border-t border-[#71717A]/30 text-center text-xs sm:text-sm text-[#71717A]"
        >
        
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
