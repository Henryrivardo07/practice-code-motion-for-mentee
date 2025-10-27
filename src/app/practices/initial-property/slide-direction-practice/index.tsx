import { motion, type TargetAndTransition } from 'motion/react';
import { cn } from '@/lib/utils';

type HorizontalDirection = {
  name: 'Left' | 'Right';
  initial: Pick<TargetAndTransition, 'x' | 'opacity'>;
};

type VerticalDirection = {
  name: 'Top' | 'Bottom';
  initial: Pick<TargetAndTransition, 'y' | 'opacity'>;
};

type Direction = HorizontalDirection | VerticalDirection;

export const SlideDirectionPractice = () => {
  const directions: Direction[] = [
    { name: 'Left', initial: { x: -100, opacity: 0 } },
    { name: 'Right', initial: { x: 100, opacity: 0 } },
    { name: 'Top', initial: { y: -100, opacity: 0 } },
    { name: 'Bottom', initial: { y: 100, opacity: 0 } },
  ];

  return (
    <div className='grid max-w-600 grid-cols-2 gap-lg md:grid-cols-4'>
      {directions.map((direction, index) => (
        <motion.div
          key={direction.name}
          className={cn(
            'flex size-80 items-center justify-center rounded-lg text-sm-semibold text-white',
            index === 0 && 'bg-gradient-to-r from-blue-500 to-blue-600',
            index === 1 && 'bg-gradient-to-r from-green-500 to-green-600',
            index === 2 && 'bg-gradient-to-r from-orange-500 to-orange-600',
            index === 3 && 'bg-gradient-to-r from-pink-500 to-pink-600'
          )}
          initial={direction.initial}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {direction.name}
        </motion.div>
      ))}
    </div>
  );
};
