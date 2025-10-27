// Import icons dari Lucide React
import { Minus, Plus } from 'lucide-react';
// Import Button component dari UI library
import { Button } from '@/components/ui/button';
// Import cn utility untuk conditional class names
import { cn } from '@/lib/utils';

// Type definition untuk props ToggleButton
type ToggleButtonProps = {
  // State visibility elemen
  isVisible: boolean;
  // Function yang dipanggil saat button diklik
  onClick: () => void;
  // Label text untuk button
  label: string;
};

// Toggle button component untuk show/hide elemen
export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isVisible,
  onClick,
  label,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      // Conditional styling berdasarkan isVisible state
      className={cn(
        'min-w-140 cursor-pointer gap-sm',
        // Jika tidak visible, berikan styling purple
        !isVisible &&
          'border-purple-400 bg-purple-400/20 text-purple-300 hover:bg-purple-400/30'
      )}
    >
      {/* Conditional rendering icon dan text berdasarkan isVisible */}
      {isVisible ? (
        <>
          <Minus />
          Remove
        </>
      ) : (
        <>
          <Plus />
          Add
        </>
      )}{' '}
      {label}
    </Button>
  );
};
