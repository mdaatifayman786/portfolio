import React from 'react';
import { motion } from 'framer-motion';

export const JellyCircle: React.FC = () => {
  const jellyVariants = {
    animate: {
      borderTopLeftRadius: ['50%', '55%', '50%', '45%', '50%'],
      borderTopRightRadius: ['50%', '45%', '50%', '55%', '50%'],
      borderBottomLeftRadius: ['50%', '55%', '50%', '45%', '50%'],
      borderBottomRightRadius: ['50%', '45%', '50%', '55%', '50%'],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: [0.25, 0.1, 0.25, 1], 
      },
    },
  };

  return (
    <div className="relative w-full h-full bg-none flex items-center justify-center">
      <motion.div
        className="w-full h-full bg-green-300"
        variants={jellyVariants}
        animate="animate"
      />
    </div>
  );
};

export default JellyCircle;
