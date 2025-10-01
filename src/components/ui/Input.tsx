import * as React from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends React.ComponentProps<'input'> {
  error?: string
  sizeVariant?: 'xs' | 'sm' | 'none'
}

const inputSizeVariants = {
  xs: 'min-h-8 text-xs',
  sm: 'min-h-9 text-sm'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, sizeVariant = 'sm', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex min-w-20 rounded-md text-sm border bg-transparent px-3 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        sizeVariant !== 'none' && inputSizeVariants[sizeVariant],
        error ? 'border-red-500' : 'border-neutral-200 focus-visible:ring-1 focus-visible:ring-neutral-950',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
