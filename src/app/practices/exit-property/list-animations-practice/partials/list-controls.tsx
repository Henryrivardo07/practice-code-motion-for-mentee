// Import icons dari Lucide React
import { Plus, Trash2 } from 'lucide-react';
// Import Button component dari UI library
import { Button } from '@/components/ui/button';
// Import cn utility untuk conditional class names
import { cn } from '@/lib/utils';

// Type definition untuk props TaskButton
type TaskButtonProps = {
  // Function yang dipanggil saat button diklik
  onClick: () => void;
  // Icon yang akan ditampilkan: 'add' atau 'clear'
  icon: 'add' | 'clear';
  // Label text untuk button
  label: string;
  // Apakah button disabled atau tidak
  disabled?: boolean;
};

// Task button component untuk add/clear actions
export const TaskButton: React.FC<TaskButtonProps> = ({
  onClick,
  icon,
  label,
  disabled,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      className='cursor-pointer'
      disabled={disabled}
    >
      {/* Conditional rendering icon berdasarkan icon prop */}
      {icon === 'add' ? (
        <Plus className='size-14' />
      ) : (
        <Trash2 className='size-14' />
      )}
      {label}
    </Button>
  );
};

// Type definition untuk props ModeButton
type ModeButtonProps = {
  // Mode yang direpresentasikan oleh button ini
  mode: 'sync' | 'popLayout';
  // Mode yang sedang aktif
  currentMode: 'sync' | 'popLayout';
  // Function yang dipanggil saat button diklik
  onClick: () => void;
};

// Mode button component untuk mengubah AnimatePresence mode
export const ModeButton: React.FC<ModeButtonProps> = ({
  mode,
  currentMode,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      // Conditional styling - highlight jika mode ini yang aktif
      className={cn(
        'cursor-pointer',
        currentMode === mode &&
          'border-purple-400 bg-purple-400/20 text-purple-300 hover:bg-purple-400/30'
      )}
    >
      mode="{mode}"
    </Button>
  );
};
