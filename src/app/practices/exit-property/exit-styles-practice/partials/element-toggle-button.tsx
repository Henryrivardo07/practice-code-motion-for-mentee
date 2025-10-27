// Import icons dari Lucide React
import { Sparkles, X } from 'lucide-react';
import type React from 'react';
// Import Button component dari UI library
import { Button } from '@/components/ui/button';
// Import cn utility untuk conditional class names
import { cn } from '@/lib/utils';

// Type definition untuk props ElementToggleButton
type ElementToggleButtonProps = {
  // State visibility elemen
  isVisible: boolean;
  // Function yang dipanggil saat button diklik
  onClick: () => void;
};

// Toggle button component untuk show/hide elemen dengan styling yang berbeda
export const ElementToggleButton: React.FC<ElementToggleButtonProps> = ({
  isVisible,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      // Conditional styling berdasarkan isVisible state
      className={cn(
        'min-w-180 cursor-pointer gap-sm',
        // Jika tidak visible, berikan styling hijau (untuk add)
        !isVisible
          ? 'border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20'
          : // Jika visible, berikan styling merah (untuk remove)
            'border-red-500/50 bg-red-500/10 text-red-300 hover:bg-red-500/20'
      )}
    >
      {/* Conditional rendering icon dan text berdasarkan isVisible */}
      {isVisible ? (
        <>
          <X className='size-14' />
          Remove Element
        </>
      ) : (
        <>
          <Sparkles className='size-14' />
          Add Element
        </>
      )}
    </Button>
  );
};
