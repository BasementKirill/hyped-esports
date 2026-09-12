import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-hyped-gold/30 bg-hyped-gold/10 text-hyped-gold",
        secondary:
          "border-hyped-sage/20 bg-hyped-charcoal text-hyped-sage",
        outline: "border-hyped-cream/20 text-hyped-cream",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
