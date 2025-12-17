import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-900)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary-900)] text-white border-2 border-[var(--primary-900)] hover:bg-[var(--primary-800)] hover:border-[var(--primary-800)] shadow-sm hover:shadow-md",
        secondary:
          "bg-white text-[var(--primary-900)] border-2 border-[var(--primary-900)] hover:bg-[var(--primary-50)]",
        accent:
          "bg-[var(--accent-teal)] text-white border-2 border-[var(--accent-teal)] hover:bg-[#00BF8F] hover:border-[#00BF8F] shadow-sm hover:shadow-md",
        ghost:
          "bg-transparent text-[var(--primary-900)] border-2 border-transparent hover:bg-[var(--primary-50)] hover:border-[var(--primary-100)]",
        link:
          "text-[var(--primary-900)] underline-offset-4 hover:underline",
        destructive:
          "bg-[var(--error)] text-white border-2 border-[var(--error)] hover:bg-[#DC2626] hover:border-[#DC2626] shadow-sm",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-11 px-6 py-2.5 text-sm",
        lg: "h-13 px-10 py-4 text-base",
        xl: "h-14 px-12 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
