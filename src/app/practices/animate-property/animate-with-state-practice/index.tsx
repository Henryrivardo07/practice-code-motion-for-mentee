import { motion } from 'motion/react';
import { useState } from 'react';

export const AnimateWithStatePractice = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className='cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl'
      animate={{
        width: isExpanded ? 400 : 200,
        height: isExpanded ? 200 : 100,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {isExpanded ? (
        <motion.div
          className='p-xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h4 className='mb-sm text-lg-semibold'>Expanded View</h4>
          <p className='text-sm-regular'>
            This content is only visible when expanded. Click to toggle!
          </p>
        </motion.div>
      ) : (
        <motion.div
          className='flex h-full items-center justify-center p-xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className='text-md-semibold'>Click to expand</span>
        </motion.div>
      )}
    </motion.div>
  );
};
