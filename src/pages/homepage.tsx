import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../Components/Navbar.tsx';
import Herosection from '../Components/Herosection.tsx';
import Skillsection from '../Components/Skillsection.tsx';
import Projectsection from '../Components/Projectsection.tsx';
import Aboutme from '../Components/Aboutme.tsx';
import Contact from '../Components/Contact.tsx';
import Loader from '../Components/signAnimation.tsx'; // Import your loader component

export default function Homepage() {
  const [loading, setLoading] = useState(true);

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 3000);
  }, []);

  // Function to smoothly scroll to sections
  const scrollIntoView = (section) => {
    const refs = {
      Home: homeRef,
      About: aboutRef,
      Skills: skillsRef,
      Projects: projectsRef,
      Contact: contactRef
    };

    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <div>
          <Navbar scrollIntoView={scrollIntoView} />
          
          <div ref={homeRef} className="lg:mb-28 lg:mt-28">
            <Herosection />
          </div>
          <div ref={skillsRef}>
            <Skillsection />
          </div>
          <div ref={projectsRef}>
            <Projectsection />
          </div>
          <div ref={aboutRef}>
            <Aboutme />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}
