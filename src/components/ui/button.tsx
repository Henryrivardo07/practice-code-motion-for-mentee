import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles - using your design system
  'inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-neutral-25 hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-neutral-25 hover:bg-secondary-600',
        outline:
          'border border-neutral-800 bg-transparent text-neutral-25 hover:bg-neutral-900',
        ghost: 'text-neutral-25 hover:bg-neutral-800',
        danger: 'bg-danger-500 text-neutral-25 hover:bg-danger-600',
      },
      size: {
        sm: 'h-32 px-sm',
        md: 'h-40 px-md',
        lg: 'h-48 px-lg',
        icon: 'size-40',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
