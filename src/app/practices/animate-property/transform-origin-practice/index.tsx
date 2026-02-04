// Import motion dan type MotionStyle untuk type safety
import { type MotionStyle, motion } from 'motion/react';

// Type untuk props - menentukan origin point yang akan digunakan
type TransformOriginPracticeProps = {
  origin: 'top-left' | 'center' | 'bottom-right';
};

export const TransformOriginPractice: React.FC<
  TransformOriginPracticeProps
> = ({ origin }) => {
  // Mapping origin point ke koordinat originX dan originY
  // originX/originY menggunakan nilai 0-1 (0 = start, 0.5 = center, 1 = end)
  const origins: Record<
    TransformOriginPracticeProps['origin'],
    Pick<MotionStyle, 'originX' | 'originY'>
  > = {
    'top-left': { originX: 0, originY: 0 }, // Kiri atas (0, 0)
    center: { originX: 0.5, originY: 0.5 }, // Tengah (0.5, 0.5)
    'bottom-right': { originX: 1, originY: 1 }, // Kanan bawah (1, 1)
  };

  // Ambil style origin berdasarkan prop yang diterima
  const originStyle = origins[origin];

  return (
    <div className='flex items-center justify-center rounded-lg p-3xl'>
      {/* Motion.div yang akan di-animate dengan transform origin */}
      <motion.div
        className='size-120 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600'
        // style: menentukan titik origin untuk transform (scale akan dimulai dari titik ini)
        style={originStyle}
        // initial: mulai dari scale 0 (tidak terlihat) dan opacity 0
        initial={{ scale: 0, opacity: 0 }}
        // animate: animasi ke scale 1 (ukuran normal) dan opacity 1 (terlihat)
        animate={{ scale: 1, opacity: 1 }}
        // transition: durasi animasi 0.6 detik
        transition={{ duration: 0.6 }}
      />
    </div>
  );
};
