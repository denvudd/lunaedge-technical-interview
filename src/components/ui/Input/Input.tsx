/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';

import { Eye, EyeOff, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, children, htmlFor, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
      children={
        <div className="inline-flex w-full items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            {children} <Info width={12} height={12} />
          </span>
          <span className="font-normal text-gray-400">Optional</span>
        </div>
      }
    />
  ),
);

Label.displayName = 'Label';

export { Label };

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, children, icon, isError, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div className="relative w-full">
        <input
          type={inputType}
          disabled={disabled}
          className={cn(
            'border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:opacity-30',
            className,
            {
              'pl-10': icon,
              'ring-2 ring-offset-2 ring-offset-red-400': isError,
            },
          )}
          ref={ref}
          {...props}
        />
        <span
          className={cn('absolute left-3 top-1/2 m-0 h-5 w-5 -translate-y-1/2 p-0 text-gray-500', {
            'text-red-400': isError,
            'text-blue-400, opacity-30': disabled,
          })}
        >
          {icon}
        </span>
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <Eye className="h-4 w-4 text-gray-500" />
            ) : (
              <EyeOff className="h-4 w-4 text-gray-500" />
            )}
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };

const InputDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ParamHTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm leading-none text-gray-400', className)} {...props}>
    {children}
  </p>
));

InputDescription.displayName = 'InputDescription';

export { InputDescription };

const InputError = React.forwardRef<
  HTMLParagraphElement,
  React.ParamHTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm leading-none text-red-400', className)} {...props}>
    {children}
  </p>
));

InputError.displayName = 'InputError';

export { InputError };
