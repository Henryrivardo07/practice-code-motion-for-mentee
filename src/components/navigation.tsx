import { ChevronLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <div className='fixed top-0 right-0 left-0 z-50 border-neutral-800 border-b bg-neutral-950/80 backdrop-blur-md'>
      <div className='container mx-auto flex items-center gap-lg px-2xl py-md'>
        <Link href='/'>
          <Button variant='ghost' size='sm' className='gap-sm'>
            <Home className='size-16' />
            <span className='hidden sm:inline'>Home</span>
          </Button>
        </Link>
        <div className='h-24 w-1 bg-neutral-800' />
        <Link href='/'>
          <Button variant='ghost' size='sm' className='gap-sm'>
            <ChevronLeft className='size-16' />
            <span>Back to Practices</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
