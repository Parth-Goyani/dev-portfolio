"use client";

import * as React from "react";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export default function Chip({
  active = false,
  className,
  type,
  ...props
}: ChipProps) {
  return (
    <button
      type={type ?? "button"}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition",
        "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white",
        active &&
          "border-amber-300/40 bg-amber-300/15 text-amber-100 shadow-[0_0_0_1px_rgba(251,191,36,0.25)]",
        className
      )}
      {...props}
    />
  );
}
