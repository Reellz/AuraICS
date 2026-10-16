"use client";

import { useState } from "react";
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

  return (
    <nav className="sticky top-0 z-50 bg-brand-primary border-b border-brand-gold/30 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-12">
        {/* Brand */}
        <Link
          href={ROUTES.home}
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
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

          <div className="min-w-0 flex-1">
            <span className="font-brand-header block whitespace-normal break-words text-sm leading-tight tracking-wide text-brand-cream sm:text-lg md:text-xl">
              Aura International Christian School
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="ui-label text-brand-cream transition-colors duration-200 hover:text-brand-gold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={ROUTES.contact}
            className="ui-label rounded-sm bg-brand-gold px-4 py-2 text-brand-green-900 shadow-sm transition-colors duration-200 hover:bg-brand-orange hover:text-brand-cream"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-cream hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-brand-gold/20 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="ui-label rounded-md px-3 py-3 text-brand-cream transition-colors hover:bg-white/10 hover:text-brand-gold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={ROUTES.contact}
            onClick={() => setIsOpen(false)}
            className="ui-label mt-2 rounded-md bg-brand-gold px-3 py-3 text-center text-brand-green-900 transition-colors hover:bg-brand-orange hover:text-brand-cream"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
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
