import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-black",
  {
    variants: {
      variant: {
        default: "bg-primary text-black hover:bg-primary/90",
        destructive:
          "bg-red-500 text-black hover:bg-red-500/90 dark:bg-red-900 dark:text-black dark:hover:bg-red-900/90",
        outline:
          "border border-primary bg-black text-primary hover:bg-black/80 hover:text-primary dark:border-primary dark:bg-black dark:hover:bg-black/80 dark:hover:text-primary",
        secondary:
          "bg-gray-800 text-primary hover:bg-gray-700 dark:bg-gray-800 dark:text-primary dark:hover:bg-gray-700",
        ghost: "hover:bg-gray-800 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline dark:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} 
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
