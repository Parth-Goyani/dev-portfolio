import Link from "next/link";
import type { ReactNode } from "react";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Nav, { type NavItem } from "@/components/layout/Nav";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type HeaderProps = {
  items?: NavItem[];
  actions?: ReactNode;
  className?: string;
  brand?: ReactNode;
};

export default function Header({
  items,
  actions,
  className,
  brand,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0f14]/70 backdrop-blur-xl",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          {brand ?? (
            <>
              <span className="hidden text-base font-semibold tracking-tight sm:inline sm:text-lg">
                Dev Portfolio
              </span>
              <span className="hidden rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.28em] text-white/70 sm:inline-flex">
                Studio
              </span>
            </>
          )}
        </Link>
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center md:gap-4">
          <Nav items={items} />
          <div className="flex items-center gap-3">{actions}</div>
        </div>
      </div>
    </header>
  );
}
