"use client"
import {motion} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
]


export default function Navbar() {
    const topVarients={
        closed:{
            rotate:0
        },
        opened:{
            rotate:37
        }
    }
    const centerVarients={
        closed:{
            opacity:1
        },
        opened:{
            opacity:0
        }
    }
    const bottomVarients={
        closed:{
            rotate:0
        },
        opened:{
            rotate:-40
        }
    }

    const listVarients={
        closed:{
            x:"100vw"
        },
        opened:{
            x:0,
            transition:{
                staggerChildren:0.2,
                when:"beforeChildren"
            },
        }
    }

    const listItemsVarients={
        closed:{
            x:-10,
            opacity:0
        },
        opened:{
            x:0,
            opacity:1
        }
    }

    const pathname = usePathname()
    let [open,setOpen]=useState(false)
    return (
        <div className='w-full h-16 py-2 px-4 bg-gray-100 flex sm:justify-evenly justify-between items-center'>
            {/* left  */}
            <div className='sm:flex hidden justify-center items-center gap-3'>
                {
                    links.map((link) =>
                        <Link className={`font-bold rounded-md px-2 py-1 ${pathname===link.url?"bg-black text-white":"bg-transparent"}`} href={link.url} key={link.title}>{link.title}</Link>
                    )
                }
            </div>
            {/* center  */}
            <Link href={'/'}><div className='text-md bg-black text-white p-2 rounded-md'>PARVEZ <span className='bg-slate-50 text-black p-1 rounded-md'>ALAM</span></div></Link>
            {/* right */}
            <div className='sm:flex hidden justify-center items-center gap-3'>
               <Link href={'https://www.linkedin.com/in/parvez-alam007'}> <Image src={'/linkedin.png'} alt='' width={22} height={22} /></Link>
               <Link href={''}><Image src={'/facebook.png'} alt='' width={32} height={32} /></Link>
               <Link href={''}><Image src={'/instagram.png'} alt='' width={32} height={32} /></Link>
               <Link href={'https://github.com/parvezalam1'}><Image src={'/github.png'} alt='' width={32} height={32} /></Link>
            </div>

            {/* menu  */}
            <div className='sm:hidden flex gap-2 flex-col cursor-pointer z-50' onClick={()=>setOpen((prev)=>!prev)}>
                <motion.div variants={topVarients} animate={open?"opened":"closed"} className={`w-10 h-1 origin-left ${open?"bg-white":"bg-black"}`}></motion.div>
                <motion.div variants={centerVarients} animate={open?"opened":"closed"} className={`w-10 h-1 ${open?"bg-white":"bg-black"}`}></motion.div>
                <motion.div variants={bottomVarients} animate={open?"opened":"closed"} className={`w-10 h-1 origin-left ${open?"bg-white":"bg-black"}`}></motion.div>
            </div>
            {
                open && 
            <motion.div
           variants={listVarients}
            initial="closed"
            animate="opened"
             className='absolute top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center gap-3 z-40'>
            {
                links.map((link) =>
                <motion.div key={link.title} variants={listItemsVarients}
                 >
                <Link className='text-white px-4 py-1 font-extrabold text-xl' href={link.url}>{link.title}</Link>
                </motion.div>
                )
                }
            </motion.div>
            }

        </div>
    )
}
