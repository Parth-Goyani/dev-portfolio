"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type NavItem = {
  label: string;
  href: string;
};

export type NavProps = {
  items?: NavItem[];
  className?: string;
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const isExternal = (href: string) => /^https?:\/\//.test(href);

const isActiveRoute = (pathname: string, href: string) => {
  if (isExternal(href)) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function Nav({ items = DEFAULT_ITEMS, className }: NavProps) {
  const pathname = usePathname() ?? "/";

  return (
    <nav aria-label="Primary" className={cn("flex items-center", className)}>
      <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
        {items.map((item) => {
          const active = isActiveRoute(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  "text-white/70 hover:text-white hover:bg-white/10",
                  active &&
                    "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]",
                  active &&
                    "after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/70 after:to-transparent"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
