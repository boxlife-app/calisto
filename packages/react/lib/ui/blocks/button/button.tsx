import { cva, VariantProps } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'
import { createVariance } from '@/core/styling'
import { Sizes } from '@/main'
import { button } from './button.styles'

const variance = createVariance(button.primary, {
  variants: {
    intent: {
      primary: button.primary,
    },
    size: {
      sm: button.sm,
      md: button.md,
      lg: button.lg,
    },
  },
})

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variance> {}

export const Button: FC<ButtonProps> = ({
  children,
  size,
  className,
  intent,
}) => {
  return (
    <button className={variance({ intent, size, className })}>
      {children}
    </button>
  )
}
