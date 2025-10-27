'use client';

import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

type MobileSidebarTriggerProps = {
  onClick: () => void;
  className?: string;
};

export const MobileSidebarTrigger: React.FC<MobileSidebarTriggerProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex size-48 items-center justify-center rounded-full',
        'border-2 border-neutral-800 bg-neutral-900',
        'text-neutral-300 transition-all',
        'hover:border-neutral-700 hover:bg-neutral-800 hover:text-neutral-25',
        'md:hidden',
        className
      )}
      aria-label='Toggle sidebar'
    >
      <Menu className='size-24' />
    </button>
  );
};
