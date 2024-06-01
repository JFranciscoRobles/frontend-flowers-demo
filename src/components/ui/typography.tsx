import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

// Definimos los elementos válidos que podemos usar en variant
const elements = ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'span'] as const
type ElementType = (typeof elements)[number]

const typographyVariants = cva('text-base', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight',
      h2: 'border-b pb-2 text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      p: 'leading-7',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      span: ''
    },
    size: {
      default: '',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground'
    },
    textColor: {
      foreground: 'text-foreground',
      primary: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      success: 'text-success-foreground',
      error: 'text-error-foreground',
      warning: 'text-warning-foreground',
      info: 'text-info-foreground'
    },
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    },
    fontStyle: {
      italic: 'italic',
      underline: 'underline',
      lineThrough: 'line-through'
    },
    textTransform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize'
    },
    letterSpacing: {
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide'
    }
  },
  defaultVariants: {
    variant: 'p',
    textColor: 'foreground',
    textAlign: 'left',
    letterSpacing: 'normal'
  }
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  variant?: ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {

      variant = 'p',
      size,
      textColor,
      textAlign,
      fontStyle,
      textTransform,
      letterSpacing,
      className,
      ...props

    },
    ref
  ) => {
    const Component = variant as React.ElementType
    return (
      <Component
        className={cn(
          typographyVariants({
            variant,
            size,
            textColor,
            textAlign,
            fontStyle,
            textTransform,
            letterSpacing
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = 'Typography'

export default Typography
