"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = {
  label: string;
  href: string;
};

export type NavProps = {
  items?: NavItem[];
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);

const isActiveRoute = (pathname: string, href: string) => {
  if (isExternal(href)) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function Nav({ items = DEFAULT_ITEMS }: NavProps) {
  const pathname = usePathname() ?? "/";
  const handleAnchorClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      event.preventDefault();
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
      }
    },
    []
  );

  return (
    <nav aria-label="Primary" className="flex items-center">
      <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
        {items.map((item) => {
          const active = isActiveRoute(pathname, item.href);
          const linkClasses = [
            "relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
            "text-white/70 hover:text-white hover:bg-white/10",
            active &&
              "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]",
            active &&
              "after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/70 after:to-transparent",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
                aria-current={active ? "page" : undefined}
                className={linkClasses}
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
