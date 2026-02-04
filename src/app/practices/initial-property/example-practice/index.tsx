import { motion } from 'motion/react';

export const ExamplePractice = () => {
  return (
    <motion.div
      className='rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-xl text-white shadow-xl'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h4 className='text-lg-semibold'>Welcome to Initial Property!</h4>
      <p className='text-sm-regular'>
        This element starts invisible and above, then animates into view.
      </p>
    </motion.div>
  );
};
