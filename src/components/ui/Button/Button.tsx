import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Loader2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none 
  focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:opacity-90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-primary text-primary bg-transparent shadow-sm hover:bg-indigo-600/10 hover:opacity-90',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        text: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-8 px-3',
        xs: 'h-5 rounded-md px-3 text-xs',
        sm: 'h-6 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-4',
        xl: 'h-12 rounded-md px-4',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="mr-1 h-4 w-4 animate-spin" />
      ) : size !== 'icon' ? (
        <Star className="mr-1 h-4 w-4" />
      ) : null}
      {size === 'icon' && isLoading ? null : children}
    </button>
  ),
);
Button.displayName = 'Button';

export { Button, buttonVariants };
