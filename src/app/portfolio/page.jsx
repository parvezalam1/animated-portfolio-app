"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const myWorks = [
  {
    title: "Next.js E-commerce",
    desc: "",
    img: "https://img-c.udemycdn.com/course/240x135/3482824_522e.jpg",
    bgColor: "from-red-200 to-lime-300",
    link:"https://next-ecommapp.vercel.app"
  },
  {
    title: "React.js Medium Blog",
    desc: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYMVTPWo-UpG-iTxD-i2KHiigTIboajgwVw&s",
    bgColor: "from-indigo-200 to-gray-300",
    link:"https://allreactblog.netlify.app/"
  },
  {
    title: "Typing Speed Test",
    desc: "",
    img: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2425534F5887582C1D",
    bgColor: "from-lime-200 to-red-300",
    link:"https://protypingtest.netlify.app/"
  },
  {
    title: "MERN Government Contractor App",
    desc: "",
    img: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max",
    bgColor: "from-gray-200 to-red-200",
    link:"https://construct-app.netlify.app/"
  },
]
export default function Portfoliopage() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className='h-full'
    >
      {/* my works */}
      <div className='h-full flex justify-center items-center font-extrabold text-5xl text-gray-600'>My Works</div>

      {/*parent slider screen  */}
      <div className='h-[400vh] relative' ref={ref}>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <motion.div className='w-screen h-screen bg-gradient-to-r from-red-200 to-lime-200' />
            {
              myWorks.map((item) =>
                <div className={`h-screen w-screen flex justify-center items-center bg-gradient-to-r ${item.bgColor}`} key={item.title}>
                  <div className='flex flex-col gap-4 h-screen scale-90 w-full md:w-1/2'>
                    <h1 className='font-extrabold xl:text-5xl md:text-3xl text-2xl text-gray-600'>{item.title}</h1>
                    {/* image  */}
                    <div className='relative w-full h-1/2'>
                      <Image className='absolute top-0 left-0' src={item.img} alt='' fill />
                    </div>
                    {/* desc  */}
                    <div className='text-lg text-gray-500'>{item.desc}</div>
                    <Link href={item.link} className='flex justify-end '>
                      <button className='w-40 bg-slate-900 text-white rounded-md xl:p-8 lg:p-5 md:p-3 p-2'>See Demo</button>
                    </Link>
                  </div>
                </div>
              )
            }
          </motion.div>
        </div>
      </div>

      {/* hire me  */}
      <div className=' h-screen flex flex-col justify-center items-center gap-14 overflow-hidden'>
        <h1 className='font-semibold xl:text-4xl md:text-3xl sm:text-2xl text-xl  text-gray-600'>Do you have a project!</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[360px] md:h-[360px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>

  )
}
