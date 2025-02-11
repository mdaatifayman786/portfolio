import React, { useState,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbutton } from "./Navbutton.tsx";
import JellyCircle from "./jelly.tsx";

export default function Navbar({ scrollIntoView }) {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("overflow-hidden"); 
    } else {
      document.body.classList.remove("overflow-hidden"); 
    }
  }, [active]);
  
  const navigationLink = [
    { name: "Home", pc: true },
    { name: "About", pc: true },
    { name: "Skills", pc: true },
    { name: "Projects", pc: true },
    { name: "Contact", pc: false }
  ];

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-between items-center mx-4 md:mx-8 lg:mx-24 pt-4 md:pt-8 lg:pt-8">
      <div className="relative z-[3]">
        <h2 className="font-sign font-bold w-64 pr-64 text-4xl md:text-3xl lg:text-4xl">aatifayman.in</h2>
        <div className="absolute left-[30%] top-[0%] z-[-1] w-16 h-16">
          <JellyCircle />
        </div>
      </div>

      <AnimatePresence>
        {/* Desktop Navigation */}
        <div className="hidden md:flex font-base justify-evenly w-[35rem] text-2xl">
          {navigationLink.map(
            (item, index) =>
              item.pc && (
                <motion.button
                  whileHover={{ scale: 1.2, color: "black" }}
                  key={index}
                  className="p-4 cursor-pointer"
                  onClick={() => scrollIntoView(item.name)}
                >
                  {item.name}
                </motion.button>
              )
          )}
        </div>

        {/* Mobile Navigation */}
        {active && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed font-base inset-0 bg-white flex flex-col items-center z-[1] justify-center  md:hidden"
          >
            <nav>
              <ul className="space-y-6">
                {navigationLink.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      className="text-4xl text-foreground hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        toggle();
                        scrollIntoView(item.name);
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Button & Mobile Toggle */}
      <div className="font-base text-2xl">
        <motion.button
          className="hidden md:flex p-4"
          whileHover={{ scale: 1.2, color: "#86EFAC" }}
          onClick={() => scrollIntoView("Contact")}
        >
          Contact
        </motion.button>
        <div className="md:hidden">
          <Navbutton toggle={toggle} active={active} />
        </div>
      </div>
    </div>
  );
}
