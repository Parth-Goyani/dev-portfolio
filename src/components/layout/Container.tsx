import * as React from "react";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "full";
  padding?: "default" | "none";
};

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

const paddingClasses: Record<NonNullable<ContainerProps["padding"]>, string> = {
  default: "px-6",
  none: "px-0",
};

export default function Container({
  size = "default",
  padding = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full", sizeClasses[size], paddingClasses[padding], className)}
      {...props}
    />
  );
}
