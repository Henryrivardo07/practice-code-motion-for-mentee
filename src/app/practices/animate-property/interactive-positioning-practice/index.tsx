// Import icons untuk tombol kontrol (arrow dan reset)
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  RefreshCw,
} from 'lucide-react';
// Import motion untuk animasi
import { motion } from 'motion/react';
// Import useState untuk manage state posisi
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const InteractivePositioningPractice = () => {
  // State untuk menyimpan posisi x dan y dari elemen yang akan di-animate
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Jarak pergerakan setiap kali tombol diklik (dalam pixel)
  const moveDistance = 50;

  // Handler untuk menggerakkan elemen berdasarkan arah yang dipilih
  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    setPosition((prev) => {
      switch (direction) {
        case 'up':
          return { ...prev, y: prev.y - moveDistance }; // Kurangi y (naik)
        case 'down':
          return { ...prev, y: prev.y + moveDistance }; // Tambah y (turun)
        case 'left':
          return { ...prev, x: prev.x - moveDistance }; // Kurangi x (kiri)
        case 'right':
          return { ...prev, x: prev.x + moveDistance }; // Tambah x (kanan)
        default:
          return prev;
      }
    });
  };

  // Handler untuk reset posisi kembali ke (0, 0)
  const handleReset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className='flex flex-col items-center gap-3xl'>
      {/* Container untuk area animasi - ukuran 300x300 */}
      <div className='flex size-300 items-center justify-center rounded-xl'>
        {/* Motion.div yang akan bergerak berdasarkan state position */}
        <motion.div
          className='flex size-80 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-sm-medium text-white'
          // animate prop: posisi akan berubah sesuai state position
          animate={position}
          // transition: menggunakan spring physics untuk pergerakan natural
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {/* Menampilkan koordinat saat ini */}({position.x}, {position.y})
        </motion.div>
      </div>

      {/* Container untuk tombol kontrol - layout seperti D-pad */}
      <div className='flex flex-col items-center gap-md'>
        {/* Tombol UP */}
        <Button
          variant='ghost'
          size='icon'
          onClick={() => handleMove('up')}
          className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
        >
          <ArrowUp className='size-20' />
        </Button>

        {/* Baris tengah: Left, Reset, Right */}
        <div className='flex items-center gap-md'>
          {/* Tombol LEFT */}
          <Button
            variant='ghost'
            size='icon'
            onClick={() => handleMove('left')}
            className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
          >
            <ArrowLeft className='size-20' />
          </Button>

          {/* Tombol RESET - kembali ke posisi awal */}
          <Button
            variant='ghost'
            size='icon'
            onClick={handleReset}
            className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
          >
            <RefreshCw className='size-16' />
          </Button>

          {/* Tombol RIGHT */}
          <Button
            variant='ghost'
            size='icon'
            onClick={() => handleMove('right')}
            className='cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-750'
          >
            <ArrowRight className='size-20' />
          </Button>
        </div>

        {/* Tombol DOWN */}
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
