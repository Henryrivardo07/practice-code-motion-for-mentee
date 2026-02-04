import { motion, type TargetAndTransition } from 'motion/react';
import { cn } from '@/lib/utils';

// Type untuk arah horizontal (kiri-kanan)
// Menggunakan property x untuk pergerakan horizontal
type HorizontalDirection = {
  name: 'Left' | 'Right';
  initial: Pick<TargetAndTransition, 'x' | 'opacity'>;
};
// Type untuk arah vertical (atas-bawah)
// Menggunakan property y untuk pergerakan vertical
type VerticalDirection = {
  name: 'Top' | 'Bottom';
  initial: Pick<TargetAndTransition, 'y' | 'opacity'>;
};
// Union type: bisa horizontal atau vertical
type Direction = HorizontalDirection | VerticalDirection;
export const SlideDirectionPractice = () => {
  // Data array berisi 4 arah dengan initial state masing-masing
  // x/y negatif = mulai dari kiri/atas, positif = mulai dari kanan/bawah
  const directions: Direction[] = [
    { name: 'Left', initial: { x: -100, opacity: 0 } }, // Mulai dari kiri, invisible
    { name: 'Right', initial: { x: 100, opacity: 0 } }, // Mulai dari kanan, invisible
    { name: 'Top', initial: { y: -100, opacity: 0 } }, // Mulai dari atas, invisible
    { name: 'Bottom', initial: { y: 100, opacity: 0 } }, // Mulai dari bawah, invisible
  ];
  return (
    // Grid layout: 2 kolom di mobile, 4 kolom di desktop
    <div className='grid max-w-600 grid-cols-2 gap-lg md:grid-cols-4'>
      {directions.map((direction, index) => (
        <motion.div
          key={direction.name}
          // Conditional styling: warna berbeda untuk setiap elemen
          className={cn(
            'flex size-80 items-center justify-center rounded-lg text-sm-semibold text-white',
            index === 0 && 'bg-gradient-to-r from-blue-500 to-blue-600',
            index === 1 && 'bg-gradient-to-r from-green-500 to-green-600',
            index === 2 && 'bg-gradient-to-r from-orange-500 to-orange-600',
            index === 3 && 'bg-gradient-to-r from-pink-500 to-pink-600'
          )}
          // Initial: posisi awal sesuai arah, opacity 0 (invisible)
          initial={direction.initial}
          // Animate: bergerak ke posisi normal (0,0) dan menjadi visible (opacity 1)
          animate={{ x: 0, y: 0, opacity: 1 }}
          // Transition: delay bertahap (staggered) dan durasi 0.5 detik
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {direction.name}
        </motion.div>
      ))}
    </div>
  );
};
