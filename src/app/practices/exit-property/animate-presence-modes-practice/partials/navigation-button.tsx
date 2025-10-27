// Import chevron icons dari Lucide React
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type React from 'react';
// Import Button component dari UI library
import { Button } from '@/components/ui/button';

// Type definition untuk props NavigationButton
type NavigationButtonProps = {
  // Arah navigasi: 'prev' atau 'next'
  direction: 'prev' | 'next';
  // Function yang dipanggil saat button diklik
  onClick: () => void;
};

// Navigation button component untuk prev/next navigation
export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='icon'
      // Styling untuk navigation button
      className='size-40 cursor-pointer bg-neutral-700 hover:bg-neutral-600'
    >
      {/* Conditional rendering icon berdasarkan direction */}
      {direction === 'prev' ? (
        <ChevronLeft className='size-16' />
      ) : (
        <ChevronRight className='size-16' />
      )}
    </Button>
  );
};
