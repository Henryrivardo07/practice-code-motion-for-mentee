import { motion } from 'motion/react';

export const MotionPrefixPractice = () => {
  return (
    <div className='maw-400 grid grid-cols-2 gap-xl'>
      <div className='flex flex-col items-center gap-sm'>
        <motion.div
          className='flex size-100 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-md-semibold text-white'
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          Hover
        </motion.div>
        <span className='text-neutral-400 text-xs-regular'>whileHover</span>
      </div>

      <div className='flex flex-col items-center gap-sm'>
        <motion.div
          className='flex size-100 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-md-semibold text-white'
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          Hover
        </motion.div>
        <span className='text-neutral-400 text-xs-regular'>whileTap</span>
      </div>
    </div>
  );
};
