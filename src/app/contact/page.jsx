"use client"
import { motion } from 'framer-motion'
import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
export default function ContactPage() {
  let [success,setSuccess]=useState(false)
  let [error,setError]=useState(false)
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false)
    setError(false)
    emailjs
      .sendForm("service_v2alyq5","template_2xmlq8c", form.current, {
        publicKey: "KH7HwG08qc4V4NO79",
      })
      .then(
        () => {
          setError(false)
          setSuccess(true)
          form.current.reset()
          console.log('SUCCESS!');
        },
        (error) => {
          setSuccess(false)
          setError(true)
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className='h-full flex flex-wrap bg-gradient-to-b from-red-100 to-lime-100'
    >
      {/* container */}
      {/* <div className='h-screen flex'> */}
      {/* left  */}
      <div className='flex justify-center items-center gap-1 text-gray-700 text-5xl md:w-1/2 w-full md:h-full h-1/4'>
        {
          text.split("").map((latter, index) =>
            <motion.span key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.1, }}
            >{latter}</motion.span>
          )
        }
        <span className='block text-5xl'>😊</span>
      </div>
      {/* right */}
      <div className='flex justify-center items-center gap-4 md:w-1/2 w-full md:h-full h-3/4'>
        <form ref={form} onSubmit={sendEmail} action="" className='w-full h-full scale-90 flex flex-col gap-4 rounded-md xl:p-20 bg-slate-50 md:p-10 p-3'>
          <h1 className='text-2xl text-gray-700 font-semibold'>Dear Parvez Alam,</h1>
          <textarea rows={5} className='outline-none p-4 text-xl font-bold border-b-2 border-gray-600'
          name='user_message' required ></textarea>
          <label htmlFor="" className='text-2xl text-gray-700 font-semibold'>My Mail Address Is:</label>
          <input type="email" name='user_email' placeholder='' required className='outline-none p-4 text-xl font-bold border-b-2 border-gray-600' />
          <button className='bg-blue-400 rounded-md text-xl text-white font-bold p-2'>Send</button>
          {success && <h3 className='font-medium text-md text-green-600'>Your message has been sent succssfully!</h3>}
          {error && <h3 className='font-medium text-md text-red-600'>Something went wrong!</h3>}
        </form>
      </div>
      {/* </div> */}
    </motion.div>
  )
}
