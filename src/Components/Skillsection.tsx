'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import js from "../assets/techLogo/js.svg"
import docker from "../assets/techLogo/docker.png"
import python from "../assets/techLogo/python.png"
import typescript from "../assets/techLogo/typescript.png"
import node from "../assets/techLogo/nodejs.png"
import flask from "../assets/techLogo/flask.png"
import mongodb from "../assets/techLogo/mongodb.png"
import mysql from "../assets/techLogo/mysql.png"
import c from "../assets/techLogo/c++.png"
import react from "../assets/techLogo/logo192.png"
import aws from "../assets/techLogo/aws.png"
import tailwind from "../assets/techLogo/tailwind.png"   

const SkillList = [
  { name: "Python", path: python },
  { name: "Javascript", path:  js},
  { name: "Typescript", path: typescript },
  { name: "Node Js", path: node },
  { name: "Flask", path:flask },
  { name: "Mongo DB", path: mongodb },
  { name: "MySql", path:mysql  },
  { name: "React", path: react },
  { name: "AWS", path: aws },
  { name: "Tailwind", path: tailwind },
  { name: "Docker", path: docker },
  { name: "C++", path: c },
]

export default function Skillsection() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical tablet/mobile breakpoint
    }

    // Check initially
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Determine how many items to show
  const visibleSkills = isMobile 
    ? (showAll ? SkillList : SkillList.slice(0, 6))
    : SkillList

  return (
    <div className='w-full py-16 px-4 lg:mt-20'>
      <div className="mx-auto">
        <h1 className='text-5xl font-base text-center mb-12 lg:mb-20'>My <span className='font-bold'>Skills</span></h1>
        
        <AnimatePresence>
        <div className="flex flex-wrap justify-center gap-4 md:gap-4 lg:gap-8">
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md w-44 h-44 flex flex-col items-center justify-center hover:scale-105 hover:bg-black hover:text-white md:w-48 md:h-48"
            >
              <img 
                src={skill.path || "/placeholder.svg"} 
                alt={skill.name} 
                className="w-12 h-12 mb-4 object-contain"
              />
              <h3 className="text-xl font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
        </AnimatePresence>

        {/* View More button - only shown on mobile when there are hidden items */}
        {isMobile && SkillList.length > 6 && (
          <button
            onClick={() => {
              setShowAll((prev) => !prev);
            }}
            className="mt-8 mx-auto h-12 block px-6 py-2 bg-black text-white rounded-lg hover:bg-black transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'View More'}
          </button>
        )}
      </div>
    </div>
  )
}

