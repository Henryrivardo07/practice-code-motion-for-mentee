import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  RefreshCw,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const InteractivePositioningPractice = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const moveDistance = 50;

  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    setPosition((prev) => {
      switch (direction) {
        case 'up':
          return { ...prev, y: prev.y - moveDistance };
        case 'down':
          return { ...prev, y: prev.y + moveDistance };
        case 'left':
          return { ...prev, x: prev.x - moveDistance };
        case 'right':
          return { ...prev, x: prev.x + moveDistance };
        default:
          return prev;
      }
    });
  };

  const handleReset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className='flex flex-col items-center gap-3xl'>
      <div className='flex size-300 items-center justify-center rounded-xl'>
        <motion.div
          className='flex size-80 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-sm-medium text-white'
          animate={position}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          ({position.x}, {position.y})
        </motion.div>
      </div>

      <div className='flex flex-col items-center gap-md'>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => handleMove('up')}
          className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
        >
          <ArrowUp className='size-20' />
        </Button>

        <div className='flex items-center gap-md'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => handleMove('left')}
            className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
          >
            <ArrowLeft className='size-20' />
          </Button>

          <Button
            variant='ghost'
            size='icon'
            onClick={handleReset}
            className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
          >
            <RefreshCw className='size-16' />
          </Button>

          <Button
            variant='ghost'
            size='icon'
            onClick={() => handleMove('right')}
            className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
          >
            <ArrowRight className='size-20' />
          </Button>
        </div>

        <Button
          variant='ghost'
          size='icon'
          onClick={() => handleMove('down')}
          className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
        >
          <ArrowDown className='size-20' />
        </Button>
      </div>
    </div>
  );
};
