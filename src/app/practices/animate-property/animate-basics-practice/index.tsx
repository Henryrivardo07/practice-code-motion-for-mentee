import { ArrowRight, ArrowUp, Maximize2, RotateCw } from 'lucide-react';
import { motion } from 'motion/react';

export const AnimateBasicsPractice = () => {
  return (
    <div className='grid-cols2 grid gap-80 md:grid-cols-4'>
      <div className='flex flex-col items-center space-y-lg'>
        <motion.div
          className='flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 text-white'
          animate={{ x: 30 }}
          transition={{ duration: 0.8 }}
        >
          <ArrowRight className='size-24' />
        </motion.div>
        <span className='text-neutral-400 text-xs-regular'>Move Right</span>
      </div>

      <div className='flex flex-col items-center space-y-lg'>
        <motion.div
          className='flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
          animate={{ y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <ArrowUp className='size-24' />
        </motion.div>
        <span className='text-neutral-400 text-xs-regular'>Move Right</span>
      </div>

      <div className='flex flex-col items-center space-y-lg'>
        <motion.div
          className='flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white'
          animate={{ scale: 1.3 }}
          transition={{ duration: 0.5 }}
        >
          <Maximize2 className='size-24' />
        </motion.div>
        <span className='text-neutral-400 text-xs-regular'>Move Right</span>
      </div>

      <div className='flex flex-col items-center space-y-lg'>
        <motion.div
          className='flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white'
          animate={{ rotate: 180 }}
          transition={{ duration: 1 }}
        >
          <RotateCw className='size-24' />
        </motion.div>
        <span className='text-neutral-400 text-xs-regular'>Move Right</span>
      </div>
    </div>
  );
};
