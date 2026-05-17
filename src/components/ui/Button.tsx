"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14] disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-[#0b0f14] shadow-[0_12px_30px_-20px_rgba(255,255,255,0.7)] hover:bg-white/90",
  secondary: "border border-white/15 bg-white/10 text-white hover:bg-white/15",
  ghost: "bg-transparent text-white/70 hover:bg-white/10 hover:text-white",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      type,
      whileTap,
      transition,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type ?? "button"}
        className={cn(baseStyles, variantStyles[variant], className)}
        whileTap={whileTap ?? { scale: 0.97 }}
        transition={transition ?? { type: "spring", stiffness: 500, damping: 32 }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
