'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export const MotionVsNoMotion = () => {
  const [motionClicked, setMotionClicked] = useState(false);

  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
      {/* Card dengan Motion.div - Bergeser saat diklik */}
      <div className='space-y-4'>
        <h2 className='mb-4 text-center font-bold text-2xl text-white dark:text-neutral-100'>
          With Motion
        </h2>
        <motion.button
          type='button'
          className='w-full cursor-pointer rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 text-left shadow-xl'
          animate={{
            x: motionClicked ? 50 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          onClick={() => setMotionClicked(!motionClicked)}
          whileHover={{ scale: 1.02 }}
        >
          <div className='mb-4 text-4xl'>🚀</div>
          <h3 className='mb-2 font-bold text-2xl text-white'>Click me!</h3>
          <p className='text-white/90'>
            This card uses motion.button. Click to see it slide to the right!
          </p>
        </motion.button>
      </div>

      {/* Card dengan div biasa - Tidak bergeser saat diklik */}
      <div className='space-y-4'>
        <h2 className='mb-4 text-center font-bold text-2xl text-white dark:text-neutral-100'>
          No Motion
        </h2>
        <button
          type='button'
          className='w-full cursor-pointer rounded-2xl bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 p-8 text-left shadow-xl'
          onClick={() => {
            // Tidak ada animasi, hanya console log untuk menunjukkan klik
            alert('Clicked but no motion!');
          }}
        >
          <div className='mb-4 text-4xl'>📦</div>
          <h3 className='mb-2 font-bold text-2xl text-white'>Click me!</h3>
          <p className='text-white/90'>
            This card uses regular button. Click it - nothing happens! No
            motion, no animation.
          </p>
        </button>
      </div>
    </div>
  );
};
