import { motion } from 'motion/react';

export const SkillCardPractice = () => {
  return (
    <motion.div
      className='w-full max-w-576 rounded-3xl bg-[#0f0f0f] p-2xl'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className='mb-lg text-neutral-50 text-xl-medium'>React</h3>
      <p className='mb-xl text-neutral-400 text-sm-regular'>
        Developing complex user interfaces with reusable components for
        efficient rendering.
      </p>

      {/* Progress Bar Container */}
      <div className='flex items-center gap-lg'>
        <div className='h-12 flex-1 rounded-lg bg-neutral-800'>
          <motion.div
            className='h-full rounded-lg bg-yellow-500'
            style={{ originX: 0 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2,
              ease: 'easeOut',
              delay: 0.3,
            }}
          />
        </div>
        <motion.span
          className='text-neutral-50 text-sm-medium'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          100%
        </motion.span>
      </div>
    </motion.div>
  );
};
