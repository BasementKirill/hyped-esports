import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hyped-gold focus-visible:ring-offset-2 focus-visible:ring-offset-hyped-dark disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-hyped-gold text-hyped-dark hover:bg-hyped-gold/90 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-hyped-gold/60 bg-transparent text-hyped-gold hover:bg-hyped-gold/10 hover:border-hyped-gold",
        ghost:
          "bg-transparent text-hyped-cream hover:bg-hyped-charcoal/60 hover:text-hyped-gold",
        secondary:
          "bg-hyped-charcoal text-hyped-cream hover:bg-hyped-charcoal/80 border border-hyped-sage/20",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-md px-10 text-base uppercase tracking-wider",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
