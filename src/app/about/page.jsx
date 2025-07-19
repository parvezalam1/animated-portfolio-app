"use client"
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from "../../components/brain.jsx"
import { useRef } from "react";
import React from 'react'
const skillsList = [
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "SCSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "PHP" },
  { skill: "React.js" },
  { skill: "Express.js" },
  { skill: "Mongodb" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Redux" },
  { skill: "Zustand" },
  { skill: "Framer Motion" },
  { skill: "Three.js" },
  { skill: "MySQL" },
  { skill: "NoSQL" },
  { skill: "Sqlite3" },
  { skill: "PostgreSQL" },
  { skill: "Git & Github" },
]
export default function Aboutpage() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-300vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      {/* container */}
      <div ref={containerRef} className="h-full overflow-scroll lg:flex">
        {/* text container */}
        <div className='lg:w-2/3 lg:pr-0 xl:w-1/2 p-4 sm:p-10 md:p-20 lg:p-28 xl:p-36 flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-9 xl:gap-36'>

          {/* biography */}
          <div className='flex flex-col gap-4'>
            <h1 className='font-extrabold text-xl text-gray-900 uppercase'>Biography</h1>
            {/* desc  */}
            <p className='text-sm text-gray-700'>
            Full Stack Developer with 2+ years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full Stack Developer
              </p>
            <p className='text-sm text-gray-600'><span className='font-extrabold text-gray-800'>Currently</span>, I am working as a MERN Stack and Next.js Developer
            ,Creating more scalable web application <br/>
            <b className='font-extrabold text-gray-800'>Like:</b> E-commerce App, Chat App, Shoping App, Food Ordering App & Typing Speed Test and more projects like this.</p>
            {/* svg button  */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* skills container */}
          <div className="flex gap-14 flex-col" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className='font-extrabold text-xl text-gray-900 uppercase'>Skills</motion.h1>
            {/* skills lists */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='flex flex-wrap gap-3 mt-5'>
              {
                skillsList.map((skill) =>
                  <div className='bg-black text-white hover:bg-white hover:text-black font-bold text-md
                py-1 px-2 rounded-md cursor-pointer' key={skill.skill}>{skill.skill}</div>
                )
              }
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* experiences */}
          <div className='pb-10' ref={experienceRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className='font-extrabold text-xl text-gray-900 uppercase'>Experiences</motion.h1>
            {/* experiences lists */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='flex gap-12 mt-10'>
              {/* left  */}
              <div className='flex flex-col justify-between w-2/5'>
                {/* top  */}
                <div className='flex flex-col gap-2'>
                  <h1 className='text-md font-medium text-gray-900 bg-slate-200 p-1'>Senior JavaScript<br /> Engineer</h1>
                  {/* desc about  */}
                  <div className='text-xs text-gray-700'>My current employment way better than the position before.</div>
                  <div className='text-xs text-red-500'>2023 Present</div>
                  <div className='text-xs text-gray-600'>AK Webtech</div>
                </div>
                {/* bottom */}
                <div className='flex flex-col gap-2'>
                  <h1 className='text-md font-medium text-gray-900 bg-slate-200 p-1'>Freelancer</h1>
                  {/* desc about  */}
                  <div className='text-xs text-gray-700'>My current employment way better than the position before.</div>
                  <div className='text-xs text-red-500'>2021 - 2022</div>
                </div>
              </div>
              {/* center Line  */}
              <div className='w-1 h-[440px] bg-slate-600'>
                <span className='inline-block rounded-full w-5 h-5 ring-1 ring-red-700 -ml-2 -mt-10 bg-white'></span>
                <span className='inline-block rounded-full w-5 h-5 ring-1 ring-red-700 -ml-2 mt-32 bg-white'></span>
                <span className='inline-block rounded-full w-5 h-5 ring-1 ring-red-700 -ml-2 mt-32 bg-white'></span>
              </div>
              {/* right */}
              <div className='flex justify-center items-center w-2/5'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-md font-medium text-gray-900 bg-slate-200 p-1'>Senior MERN Stack Developer</h1>
                  {/* desc about  */}
                  <div className='text-xs text-gray-700'>My current employment way better than the position before.</div>
                  <div className='text-xs text-red-500'>2023 Present</div>
                  <div className='text-xs text-gray-600'>AK Webtech</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg container */}

        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}
