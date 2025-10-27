import { motion } from 'motion/react';
import type React from 'react';

type CardProps = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
};

const Card: React.FC<CardProps> = ({ children, ref }) => {
  return (
    <div
      ref={ref}
      className='rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 p-xl text-white shadow-lg'
    >
      {children}
    </div>
  );
};

const MotionCard = motion.create(Card);

export const MotionCreatePractice = () => {
  return (
    <MotionCard
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h4 className='mb-xs text-lg-semibold'>Motion Card</h4>
      <p className='text-sm-regular'>Hover and click me!</p>
    </MotionCard>
  );
};
