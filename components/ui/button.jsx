import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-green-500 hover:bg-green-900 hover:shadow-[0_0_10px_#00ff00]",
        destructive:
          "bg-red-600 text-black hover:bg-red-700 hover:shadow-[0_0_10px_#ff0000]",
        outline:
          "border border-green-500 bg-black text-green-500 hover:bg-green-900 hover:shadow-[0_0_10px_#00ff00] dark:border-green-500 dark:bg-black",
        secondary:
          "bg-gray-800 text-green-500 hover:bg-gray-700 hover:shadow-[0_0_10px_#00ff00]",
        ghost: "bg-transparent text-green-500 hover:bg-black hover:shadow-[0_0_10px_#00ff00]",
        link: "text-green-500 underline-offset-4 hover:underline",
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
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
