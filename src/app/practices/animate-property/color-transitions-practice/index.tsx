import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const ColorTransitionsPractice = () => {
  const colors = ['#8B5CF6', '#EC4899', '#0BB6D4', '#13B981', '#F59E0C'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div className='flex flex-col items-center gap-xl'>
      <motion.div
        className='size-150 rounded-xl'
        animate={{ backgroundColor: colors[currentIndex] }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      <Button
        onClick={handleNext}
        variant='ghost'
        size='md'
        className='cursor-pointer gap-sm rounded-full border border-neutral-700 bg-neutral-800 px-xl-py-md text-neutral-200 hover:border-neutral-600 hover:bg-neutral-750'
      >
        Next Color
        <ArrowRight className='size-16' />
      </Button>
    </div>
  );
};
