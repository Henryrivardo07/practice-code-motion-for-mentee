// Import AnimatePresence dan motion dari Framer Motion
// AnimatePresence: komponen untuk menangani exit animations
// motion: komponen untuk membuat animasi
import { AnimatePresence, motion } from 'motion/react';
// Import wrapper component untuk demo
import { ExampleWrapper } from './partials/example-wrapper';

// Komponen untuk demo Fade Out animation
export const FadeOutExample = () => {
  return (
    // ExampleWrapper menyediakan toggle button dan container untuk demo
    <ExampleWrapper label='Fade Out' itemLabel='Fade Out'>
      {/* Render prop pattern - children menerima isVisible sebagai parameter */}
      {(isVisible) => (
        <AnimatePresence>
          {/* Conditional rendering - hanya render jika isVisible true */}
          {isVisible && (
            <motion.div
              // Styling untuk elemen yang akan di-animate
              className='absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500'
              // Initial state: opacity 0 (tidak terlihat)
              initial={{ opacity: 0 }}
              // Animate state: opacity 1 (terlihat penuh)
              animate={{ opacity: 1 }}
              // Exit state: opacity 0 (fade out saat dihapus dari DOM)
              exit={{ opacity: 0 }}
              // Durasi animasi 0.5 detik
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};

// Komponen untuk demo Scale Down animation
export const ScaleDownExample = () => {
  return (
    <ExampleWrapper label='Scale Down' itemLabel='Scale Down'>
      {/* Render prop pattern - children menerima isVisible sebagai parameter */}
      {(isVisible) => (
        <AnimatePresence>
          {/* Conditional rendering - hanya render jika isVisible true */}
          {isVisible && (
            <motion.div
              // Styling untuk elemen bulat yang akan di-animate
              // Positioning: center dengan absolute positioning
              className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-100 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500'
              // Initial state: scale 0 (tidak terlihat, ukuran 0)
              initial={{ scale: 0 }}
              // Animate state: scale 1 (ukuran normal)
              animate={{ scale: 1 }}
              // Exit state: scale 0 (mengecil hingga hilang)
              exit={{ scale: 0 }}
              // Menggunakan spring animation untuk efek yang lebih natural
              transition={{ type: 'spring' }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};

// Komponen untuk demo Slide Out animation
export const SlideOutExample = () => {
  return (
    <ExampleWrapper label='Slide Out' itemLabel='Slide Out'>
      {/* Render prop pattern - children menerima isVisible sebagai parameter */}
      {(isVisible) => (
        <AnimatePresence>
          {/* Conditional rendering - hanya render jika isVisible true */}
          {isVisible && (
            <motion.div
              // Styling untuk elemen bulat yang akan di-animate
              // Positioning: center dengan absolute positioning
              className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-100 rounded-full bg-gradient-to-r from-green-500 to-emerald-500'
              // Initial state: mulai dari kiri (x: -100) dan tidak terlihat (opacity: 0)
              initial={{ x: -100, opacity: 0 }}
              // Animate state: posisi normal (x: 0) dan terlihat penuh (opacity: 1)
              animate={{ x: 0, opacity: 1 }}
              // Exit state: slide ke kanan (x: 100) sambil fade out (opacity: 0)
              exit={{ x: 100, opacity: 0 }}
              // Durasi animasi 0.4 detik
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};

// Komponen untuk demo Rotate animation
export const RotateExample = () => {
  return (
    <ExampleWrapper label='Rotate & Fade' itemLabel='Rotate & Fade'>
      {/* Render prop pattern - children menerima isVisible sebagai parameter */}
      {(isVisible) => (
        <AnimatePresence>
          {/* Conditional rendering - hanya render jika isVisible true */}
          {isVisible && (
            <motion.div
              // Styling untuk elemen persegi panjang yang akan di-animate
              // Positioning: center dengan absolute positioning
              className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-80 w-60 rounded-lg bg-gradient-to-r from-orange-500 to-red-500'
              // Initial state: rotate -90 derajat dan tidak terlihat (opacity: 0)
              initial={{ rotate: -90, opacity: 0 }}
              // Animate state: rotate 0 derajat (normal) dan terlihat penuh (opacity: 1)
              animate={{ rotate: 0, opacity: 1 }}
              // Exit state: rotate 90 derajat sambil fade out (opacity: 0)
              exit={{ rotate: 90, opacity: 0 }}
              // Menggunakan spring animation untuk efek yang lebih natural
              transition={{ type: 'spring' }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};
