import React from 'react'
import { motion } from "framer-motion"
import { Linkedin,Download } from 'lucide-react'
import bannerLogo from '../assets/techLogo/Banner.svg'

export default function Herosection() {
  return (
    <div className='w-full flex flex-col md:ml-0 lg:flex-row mt-20 lg:pl-4 '>
        <img className='pr-16 w-full h-64 md:h-[25rem] lg:hidden' src={bannerLogo} alt='Banner logo'></img>
      <div className="w-full pl-4 pr-4 md:pl-16 lg:pt-12 lg:w-[70%]">
        <h1 className='font-base font-bold-300 text-5xl mt-8 md:text-6xl'>Hello I'am <span className='font-bold'>Aatif Ayman.</span></h1>
        <h1 className='font-base font-bold-300 text-5xl mt-4 md:text-6xl'><span className='font-bold'>Software</span> <span className='font-outliner font-bold'>Developer</span></h1>
        <h1 className='font-base font-bold-300 text-5xl mt-4 md:text-6xl'>Based in <span className='font-bold'>India</span></h1>
        <p className='mt-8 font-lato pr-4 text-md md:w-[40rem]'>Hi, I’m Aatiif Ayman, a passionate Software Developer from India.I thrive in the ever-evolving world of technology. The essence of creativity and problem-solving drives me every day. Let’s transform ideas into impactful digital experiences together!</p>
        <div className="flex  mt-8">
          <AnimatedSquareLinkedInButton/>
          <AnimatedResumeButton/>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img className='w-[80rem] h-[30rem]' src={bannerLogo} alt='Banner logo'></img>
      </div>
    </div>
  )
}

function AnimatedSquareLinkedInButton() {
  return (
    <motion.a
      href="https://www.linkedin.com/in/aatif-ayman-39592a230/" // Replace with your LinkedIn profile URL
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-opacity-50 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Connect on LinkedIn"
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Linkedin className="w-8 h-8" />
      </motion.div>
    </motion.a>
  )
}

function AnimatedResumeButton() {
  return (
    <motion.button
      className="flex items-center h-12 justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors ml-8"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        // Add your download logic here
        console.log("Downloading resume...")
      }}
    >
      <span className="font-semibold">Download Resume</span>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Download className="w-5 h-5" />
      </motion.div>
    </motion.button>
  )
}