// Import AnimatePresence dan motion dari Framer Motion
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
// Import useState untuk state management
import { useState } from 'react';
// Import toggle button component
import { ElementToggleButton } from './partials/element-toggle-button';

// Type definition untuk props ExitStyleDemo
type ExitStyleDemoProps = {
  // Style yang akan digunakan untuk exit animation
  style: 'fade' | 'slide' | 'scale' | 'rotate' | 'blur';
};

// Komponen untuk demo berbagai gaya exit animation
export const ExitStyleDemo: React.FC<ExitStyleDemoProps> = ({ style }) => {
  // State untuk mengontrol visibility elemen
  const [isVisible, setIsVisible] = useState(true);

  // Function untuk mendapatkan exit animation berdasarkan style
  const getExitAnimation = () => {
    switch (style) {
      case 'fade':
        // Fade out: hanya opacity 0
        return { opacity: 0 };
      case 'slide':
        // Slide out: bergerak ke kiri sambil fade out
        return {
          x: -200,
          opacity: 0,
        };
      case 'scale':
        // Scale out: mengecil sambil fade out
        return { scale: 0, opacity: 0 };
      case 'rotate':
        // Rotate out: berputar 180 derajat sambil fade out
        return { rotate: 180, opacity: 0 };
      case 'blur':
        // Blur out: blur effect sambil fade out
        return { filter: 'blur(10px)', opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  // Function untuk mendapatkan initial animation berdasarkan style
  const getInitialAnimation = () => {
    switch (style) {
      case 'fade':
        // Fade in: mulai dari opacity 0
        return { opacity: 0 };
      case 'slide':
        // Slide in: mulai dari kanan (x: 200) sambil fade in
        return {
          x: 200,
          opacity: 0,
        };
      case 'scale':
        // Scale in: mulai dari scale 0 sambil fade in
        return { scale: 0, opacity: 0 };
      case 'rotate':
        // Rotate in: mulai dari rotate -180 derajat sambil fade in
        return { rotate: -180, opacity: 0 };
      case 'blur':
        // Blur in: mulai dari blur sambil fade in
        return { filter: 'blur(10px)', opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div className='flex flex-col items-center gap-xl'>
      {/* Toggle button untuk show/hide elemen */}
      <ElementToggleButton
        isVisible={isVisible}
        onClick={() => setIsVisible(!isVisible)}
      />

      {/* Container untuk elemen yang akan di-animate */}
      <div className='relative size-150'>
        {/* AnimatePresence dengan mode 'wait' - exit selesai dulu baru enter */}
        <AnimatePresence mode='wait'>
          {/* Conditional rendering berdasarkan isVisible */}
          {isVisible && (
            <motion.div
              // Key penting untuk AnimatePresence - harus unique
              key={style}
              // Styling untuk elemen yang akan di-animate
              className='absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg'
              // Initial state berdasarkan style yang dipilih
              initial={getInitialAnimation()}
              // Animate state - semua property kembali ke normal
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                filter: 'blur(0px)',
              }}
              // Exit state berdasarkan style yang dipilih
              exit={getExitAnimation()}
              // Transition configuration
              transition={{
                duration: 0.5,
                // Untuk blur gunakan tween, yang lain gunakan spring
                type: style === 'blur' ? 'tween' : 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              {/* Konten di dalam elemen yang di-animate */}
              <div className='text-center'>
                <div className='text-lg-bold text-white'>
                  {style.toUpperCase()}
                </div>
                <div className='text-sm-regular text-white/80'>Exit Style</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Display current style */}
      <div className='text-center'>
        <div className='rounded-full bg-neutral-800/50 px-lg py-sm'>
          <span className='text-neutral-300 text-sm-regular'>
            Current: <strong className='text-purple-300'>{style}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
