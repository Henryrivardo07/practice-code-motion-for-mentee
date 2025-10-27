'use client';

import { RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type RefreshButtonProps = {
  onClick: () => void;
  label?: string;
  className?: string;
};

export const RefreshButton: React.FC<RefreshButtonProps> = ({
  onClick,
  label = 'Refresh Animation',
  className,
}) => {
  return (
    <div className={cn('mb-lg flex justify-end', className)}>
      <motion.button
        type='button'
        onClick={onClick}
        className='group relative cursor-pointer overflow-hidden rounded-lg border border-neutral-700 bg-gradient-to-r from-neutral-800 to-neutral-850 px-lg py-sm text-neutral-200 text-sm-medium shadow-lg transition-all hover:border-primary-600/50 hover:shadow-primary-500/20'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-500/10 to-primary-600/0'
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        {/* Content */}
        <span className='relative flex items-center gap-sm'>
          <motion.div
            className='text-primary-400'
            whileHover={{
              rotate: 360,
              transition: {
                duration: 0.6,
                ease: 'easeInOut',
              },
            }}
          >
            <RefreshCw className='size-14' />
          </motion.div>
          <span className='bg-gradient-to-r from-neutral-200 to-neutral-100 bg-clip-text text-transparent'>
            {label}
          </span>
        </span>
      </motion.button>
    </div>
  );
};
