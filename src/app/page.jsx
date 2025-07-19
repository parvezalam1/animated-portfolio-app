"use client"
import {motion} from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <motion.div 
   initial={{y:"-200vh"}}
   animate={{y:"0%"}}
   transition={{duration:1}}
   className="flex sm:flex-row flex-col">
    {/* left  */}
    <div className="relative sm:w-1/2 w-full sm:h-[90.2vh] h-[45.1vh]">
      <Image className="absolute" src={'/3d.png'} alt="" fill/>  
    </div>
    {/* right */}
    <div className="flex justify-center flex-col gap-5 p-3  sm:w-1/2 w-full sm:h-[90.2vh] h-[45.1vh]">
      {/* title */}
      <h2 className="font-extrabold sm:text-4xl text-lg text-gray-700">Crafting Digital Experiences, Desigining Tomorrow.</h2>
      <p className="text-gray-600 font-medium text-md">Welcome to my digital canvas, where inivation and creativity converege ,with a keep eye for aesthetics and
      a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
      {/* buttons */}
      <div className="flex gap-4 ">
      <button className="bg-black px-3 py-1 rounded-md font-medium text-white text-xs">View My Work</button>
      <Link className="shadow-md shadow-black px-3 py-1 rounded-md font-medium text-black text-xs" href={'/contact'}>Contact Me</Link>
      </div>
    </div>
   </motion.div>
  )
}
