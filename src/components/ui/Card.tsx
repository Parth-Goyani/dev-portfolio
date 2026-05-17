import * as React from "react";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative isolate overflow-hidden rounded-2xl border border-white/10 border-muted/30 bg-[#11161D]/90 p-6 text-white shadow-[0_25px_60px_-45px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-white/30",
          "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
          "after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_50%)] after:opacity-30 after:transition-opacity after:duration-500 hover:after:opacity-60",
          className
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
