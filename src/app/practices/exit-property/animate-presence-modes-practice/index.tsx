// Import Star icon dari Lucide React
import { Star } from 'lucide-react';
// Import AnimatePresence dan motion dari Framer Motion
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
// Import useState untuk state management
import { useState } from 'react';
// Import cn utility untuk conditional class names
import { cn } from '@/lib/utils';
// Import NavigationButton component
import { NavigationButton } from './partials/navigation-button';

// Type definition untuk props AnimatePresenceModeDemo
type AnimatePresenceModeDemoProps = {
  // Mode AnimatePresence: 'sync' atau 'wait'
  mode: 'sync' | 'wait';
  // Apakah menggunakan initial={false} atau tidak
  useInitialFalse: boolean;
};

// Komponen untuk demo perbedaan mode AnimatePresence
export const AnimatePresenceModeDemo: React.FC<
  AnimatePresenceModeDemoProps
> = ({ mode, useInitialFalse }) => {
  // State untuk mengontrol item yang sedang ditampilkan
  const [currentItem, setCurrentItem] = useState(0);

  // Array items yang akan di-animate
  const items = [
    { icon: Star, color: 'from-purple-500 to-pink-500' },
    { icon: Star, color: 'from-blue-500 to-cyan-500' },
    { icon: Star, color: 'from-green-500 to-emerald-500' },
    { icon: Star, color: 'from-orange-500 to-red-500' },
  ];

  // Function untuk pindah ke item berikutnya
  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % items.length);
  };

  // Function untuk pindah ke item sebelumnya
  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className='flex flex-col items-center gap-xl'>
      {/* Navigation controls */}
      <div className='flex items-center gap-lg'>
        {/* Previous button */}
        <NavigationButton direction='prev' onClick={prevItem} />

        {/* Container untuk elemen yang akan di-animate */}
        <div className='relative size-150'>
          {/* AnimatePresence dengan mode yang dipilih dan initial setting */}
          <AnimatePresence mode={mode} initial={!useInitialFalse}>
            <motion.div
              // Key penting untuk AnimatePresence - menggunakan currentItem
              key={currentItem}
              // Dynamic className berdasarkan item yang dipilih
              className={cn(
                'absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg',
                items[currentItem].color
              )}
              // Initial state: opacity 0, scale 0.8, rotate -90
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              // Animate state: opacity 1, scale 1, rotate 0
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              // Exit state: opacity 0, scale 0.8, rotate 90
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              // Transition configuration
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
            >
              {/* Render icon dari item yang dipilih */}
              {(() => {
                const Icon = items[currentItem].icon;
                return <Icon className='size-64 text-white' />;
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <NavigationButton direction='next' onClick={nextItem} />
      </div>

      {/* Information display */}
      <div className='space-y-sm text-center'>
        {/* Current mode display */}
        <div className='rounded-lg bg-neutral-800/50 px-xl py-sm'>
          <span className='text-neutral-300 text-sm-regular'>
            Mode:{' '}
            <strong
              className={mode === 'sync' ? 'text-purple-300' : 'text-green-300'}
            >
              {mode}
            </strong>
          </span>
        </div>
        {/* Mode description */}
        <div className='text-neutral-400 text-xs-regular'>
          {mode === 'sync'
            ? 'Exit and enter animations overlap'
            : 'Exit completes before enter starts'}
        </div>
        {/* Initial false warning */}
        {useInitialFalse && (
          <div className='text-amber-400 text-xs-regular'>
            Initial animation suppressed on first mount
          </div>
        )}
      </div>
    </div>
  );
};
