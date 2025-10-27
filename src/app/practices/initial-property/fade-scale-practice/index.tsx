import { motion } from 'motion/react';

export const FadeScalePractice = () => {
  return (
    <motion.div
      className='rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 p-xl text-white shadow-xl'
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h4 className='text-lg-semibold'>Hello World!</h4>
      <p className='text-sm-regular'>I fade, scale, and rotate into view</p>
    </motion.div>
  );
};
