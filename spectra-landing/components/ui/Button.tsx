"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, boxShadow: "0 0 10px var(--color-spectra-cyan)" }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded border border-transparent px-4 py-2 font-mono text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-spectra-cyan focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "outline" && "border-spectra-cyan text-spectra-cyan hover:bg-spectra-cyan/10",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
