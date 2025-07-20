"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Navbar from './Navbar.jsx'
import { usePathname } from 'next/navigation.js'
export default function TransitionProvider({ children }) {
    const pathname = usePathname()
    return (
        <AnimatePresence mode='wait'>
            <div key={pathname}>

                <motion.div className="w-screen h-screen bg-black rounded-b-[100px] fixed z-40 "
                    animate={{ height: "0vh" }}
                    exit={{ height: "200vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div className="fixed text-white text-6xl w-fit h-fit top-0 left-0 right-0 m-auto bottom-0 cursor-default z-40"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    {pathname.substring(1)}</motion.div>
                <motion.div className="w-screen h-screen bg-black rounded-t-[100px] fixed bottom-0 z-30 "
                    initial={{ height: "200vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />
                <Navbar />
                <div className='h-[calc(100vh-4rem)]'>{children}</div>
            </div>
        </AnimatePresence>
    )
}


