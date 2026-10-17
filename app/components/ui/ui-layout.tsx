"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/app/routes";
import { Socials } from "@/utils/socials";

const NAV_LINKS = [
  { name: "Home", href: ROUTES.home },
  { name: "About", href: ROUTES.about },
  { name: "Academics", href: ROUTES.academics },
  { name: "Admissions", href: ROUTES.admissions },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const wasOpenRef = useRef(false);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setIsOpen(false);

  // Manage keyboard navigation, focus trapping, and scroll locking.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      'a[href]:not([tabindex="-1"]), button:not(:disabled):not([tabindex="-1"])';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          focusableSelector
        )
      ).filter((element) => element.getClientRects().length > 0);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (
        event.shiftKey &&
        (activeElement === first ||
          !drawerRef.current.contains(activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (activeElement === last ||
          !drawerRef.current.contains(activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Put keyboard focus inside the drawer.
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Return focus to the hamburger only after the drawer closes.
  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      menuButtonRef.current?.focus();
    }
  }, [isOpen]);

  const linkClasses = (href: string) =>
    `ui-label rounded-md px-4 py-3 transition-colors duration-200 ${
      isActive(href)
        ? "bg-white/10 text-brand-gold border-l-4 border-brand-gold"
        : "text-brand-cream hover:bg-white/10 hover:text-brand-gold"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-brand-gold/30 bg-brand-primary shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8 lg:px-12">
          {/* Brand */}
          <Link
            href={ROUTES.home}
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-brand-green-100 sm:h-12 sm:w-12">
              <Image
                src="/logo.png"
                alt="Aura International Christian School logo"
                width={48}
                height={48}
                priority
                className="object-contain"
              />
            </div>

            <span className="font-brand-header block min-w-0 whitespace-normal break-words text-sm leading-tight tracking-wide text-brand-cream sm:text-lg md:text-xl">
              Aura International Christian School
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden shrink-0 items-center gap-5 md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`ui-label rounded-sm py-2 transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-brand-gold"
                    : "text-brand-cream hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href={ROUTES.contact}
              aria-current={
                isActive(ROUTES.contact) ? "page" : undefined
              }
              className={`ui-label rounded-sm px-4 py-2 shadow-sm transition-colors duration-200 ${
                isActive(ROUTES.contact)
                  ? "bg-brand-orange text-brand-cream"
                  : "bg-brand-gold text-brand-green-900 hover:bg-brand-orange hover:text-brand-cream"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-brand-cream transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:hidden"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={isOpen ? 0 : -1}
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full bg-brand-green-900/75 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sliding panel */}
        <aside
          id="mobile-menu"
          ref={drawerRef}
          role="dialog"
          aria-modal={isOpen ? true : undefined}
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`absolute inset-y-0 right-0 flex h-full w-full flex-col overflow-y-auto overscroll-contain bg-brand-primary text-brand-cream shadow-2xl transition-transform duration-300 ease-in-out motion-reduce:transition-none sm:max-w-md ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between gap-3 border-b border-brand-gold/30 px-5 py-5 sm:px-6">
            <Link
              href={ROUTES.home}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="flex min-w-0 items-center gap-3"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-brand-green-100">
                <Image
                  src="/logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              </div>

              <span className="font-branding-header2 min-w-0 whitespace-normal break-words text-base leading-tight text-brand-cream">
                Aura International Christian School
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              tabIndex={isOpen ? 0 : -1}
              className="shrink-0 rounded-md p-3 text-brand-cream transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav
            aria-label="Mobile navigation links"
            className="flex flex-1 flex-col px-5 py-8 sm:px-6"
          >
            <p className="ui-label mb-5 text-xs tracking-[0.2em] text-brand-gold">
              Explore AuraICS
            </p>

            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={
                    isActive(link.href) ? "page" : undefined
                  }
                  className={linkClasses(link.href)}
                >
                  <span className="flex items-center justify-between gap-3">
                    {link.name}
                    {isActive(link.href) && (
                      <span
                        aria-hidden="true"
                        className="text-brand-gold"
                      >
                        ✓
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact CTA */}
            <Link
              href={ROUTES.contact}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              aria-current={
                isActive(ROUTES.contact) ? "page" : undefined
              }
              className={`ui-label mt-6 flex min-h-14 items-center justify-center rounded-md px-5 py-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cream ${
                isActive(ROUTES.contact)
                  ? "bg-brand-orange text-brand-cream"
                  : "bg-brand-gold text-brand-green-900 hover:bg-brand-orange hover:text-brand-cream"
              }`}
            >
              Contact Us <span aria-hidden="true" className="ml-3">→</span>
            </Link>

            {/* Drawer footer */}
            <div className="mt-auto pt-10">
              <div className="mb-4 h-px bg-brand-gold/30" />
              <p className="font-branding-header2 text-xl">
                Growing to glow.
              </p>
              <p className="body-text mt-2 text-sm text-brand-cream/70">
                Faith. Character. Excellence.
              </p>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}


const FOOTER_LINKS = {
  academics: [
    { name: "Nursery", href: "/academics/nursery" },
    { name: "Homeschool", href: "/academics/" },
    { name: "Curriculum & Faculty", href: "/academics/curriculum" },
  ],
  admissions: [
    { name: "Apply Online", href: "/admissions/apply" },
    { name: "Schedule a Tour", href: "/admissions/tour" },
  ],
  portal: [
    { name: "Parent Portal", href: "/portals/parents" },
    { name: "Student Handbook", href: "/portals/handbook" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-brand-primary bg-brand-green-900 body-text text-brand-green-100">
      <div className="mx-auto max-w-7xl px-2 py-8 sm:px-4 sm:py-12 lg:px-8 lg:py-16">
        {/* Main grid: four columns on every screen */}
        <div className="mb-8 grid grid-cols-4 gap-2 sm:mb-10 sm:gap-5 lg:mb-12 lg:gap-8">
          {/* Brand column */}
          <div className="flex min-w-0 flex-col gap-2">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-brand-green-100 sm:h-11 sm:w-11">
                <Image
                  src="/logo.png"
                  alt="Aura International Christian School logo"
                  width={44}
                  height={44}
                  loading="lazy"
                  className="object-contain p-1"
                />
              </div>

              <span className="font-branding-header2 break-words text-sm tracking-wide text-brand-gold sm:text-lg lg:text-xl">
                AuraICS
              </span>
            </div>

            <p className="text-xs leading-relaxed text-brand-cream/80 sm:text-sm">
              Fostering academic excellence, integrity, and lifelong learning
              since 2025.
            </p>
          </div>

          {/* Academics */}
          <div className="min-w-0">
            <h3 className="ui-label border-b border-brand-primary-mid pb-2 text-[10px] tracking-wide text-brand-gold sm:text-xs sm:tracking-widest sm:text-sm">
              Academics
            </h3>

            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {FOOTER_LINKS.academics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="break-words text-xs transition-colors duration-200 hover:text-brand-orange sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div className="min-w-0">
            <h3 className="ui-label border-b border-brand-primary-mid pb-2 text-[10px] tracking-wide text-brand-gold sm:text-xs sm:tracking-widest sm:text-sm">
              Admissions
            </h3>

            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {FOOTER_LINKS.admissions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="break-words text-xs transition-colors duration-200 hover:text-brand-orange sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="min-w-0">
            <h3 className="ui-label border-b border-brand-primary-mid pb-2 text-[10px] tracking-wide text-brand-gold sm:text-xs sm:tracking-widest sm:text-sm">
              Resources
            </h3>

            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {FOOTER_LINKS.portal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="break-words text-xs transition-colors duration-200 hover:text-brand-orange sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-4 border-t border-brand-primary-mid pt-5 sm:gap-5 sm:pt-8 md:flex-row md:items-center">
          <p className="text-center text-[10px] leading-relaxed text-brand-green-100/60 dm-mono sm:text-xs md:text-left">
            &copy; {currentYear} Aura International Christian School. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-wide dm-mono sm:gap-x-5 sm:text-xs sm:tracking-wider md:justify-end">
            <a
              href={Socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green-100 transition-colors hover:text-brand-gold"
            >
              Facebook
            </a>

            <a
              href={Socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green-100 transition-colors hover:text-brand-gold"
            >
              Instagram
            </a>

            <a
              href={Socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green-100 transition-colors hover:text-brand-gold"
            >
              LinkedIn
            </a>

            <a
              href={Socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green-100 transition-colors hover:text-brand-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
