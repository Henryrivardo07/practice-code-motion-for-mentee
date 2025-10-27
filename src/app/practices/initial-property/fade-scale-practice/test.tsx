import { motion } from 'motion/react';

export function Example() {
  const parentVariants = {
    start: { rotate: 180, borderRadius: 30 },
    hoverState: { borderRadius: 75 },
    tapState: { backgroundColor: '#ffd700' },
  };

  const childVariants = {
    start: { rotate: -180 },
    hoverState: { borderRadius: 30 },
    tapState: { backgroundColor: '#f00' },
  };

  return (
    <motion.div
      className='flex size-150 cursor-pointer items-center justify-center rounded-3xl bg-white'
      variants={parentVariants}
      animate='start'
      whileHover='hoverState'
      whileTap='tapState'
    >
      <motion.div
        className='size-60 rounded-lg bg-orange-400'
        variants={childVariants}
      />
    </motion.div>
  );
}
