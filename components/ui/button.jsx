import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative text-white group overflow-hidden", // Updated to match the desired style
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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

const Button = React.forwardRef(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <div className="relative text-white border-t-[1px] border-t-orange-500 border-b-[1px] border-b-orange-500 group overflow-hidden">
      <Comp
        className={cn(buttonVariants({ variant, size, className, "flex items-center justify-center font-titleFont tracking-[2px] uppercase text-sm font-normal": true }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
      <span className="h-full w-[1px] bg-orange-500 inline-block absolute right-0 -translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
      <span className="h-full w-[1px] bg-orange-500 inline-block absolute left-0 translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
    </div>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
