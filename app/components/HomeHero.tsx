"use client";

import { useEffect, useState } from "react";
import { PrimaryButton } from "./ui/Button";

type HeroSlide = {
  src: string;
  alt: string;
};

const heroImages: HeroSlide[] = [
  {
    src: "/global/home/hero1.jpg",
    alt: "An AICS student smiling",
  },
  {
    src: "/global/home/hero2.jpg",
    alt: "An AICS student learning in class",
  },
  {
    src: "/global/home/hero3.jpg",
    alt: "AICS students and staff gathered together",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = heroImages.length;

  useEffect(() => {
    if (totalImages <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((i) => (i + 1) % totalImages);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [totalImages]);

  if (totalImages === 0) return null;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-cream"
    >
      {/* Always 2 columns — same layout on all devices */}
      <div className="mx-auto grid min-h-[380px] max-w-7xl grid-cols-2 items-center gap-4 px-4 py-10 sm:min-h-[520px] sm:gap-8 sm:px-5 sm:py-14 md:gap-12 md:px-10 md:py-8 lg:min-h-[620px] lg:gap-16 lg:px-12 lg:py-10">
        {/* Content — left */}
        <div className="flex flex-col items-start">
          <p className="mb-2 text-[10px] font-medium tracking-wide text-brand-primary sm:mb-3 sm:text-xs md:mb-4 md:text-sm">
            Aura International Christian School
          </p>

          <h1 className="font-brand-header max-w-xl text-2xl leading-[1.15] text-brand-green-900 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            Growing to{" "}
            <span className="text-brand-primary-mid">glow.</span>
          </h1>

          <p className="body-text mt-3 max-w-md text-xs leading-relaxed text-brand-green-900/80 sm:mt-4 sm:text-sm md:mt-5 md:text-base lg:mt-6 lg:text-lg">
            Nurturing young minds, building godly character, and helping
            every student grow into who they were created to be.
          </p>

          <PrimaryButton
          text="Discover AICS"
          href="/about"
          ></PrimaryButton>

          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium text-brand-green-900/70 sm:mt-7 sm:gap-x-4 sm:text-xs md:mt-8 md:gap-x-6 md:text-sm">
            {["Godliness", "Integrity", "Diligence", "Humility"].map(
              (value) => (
                <span key={value}>{value}</span>
              )
            )}
          </div>
        </div>

        {/* Image carousel — right */}
        <div className="relative w-full">
          <div className="relative aspect-[5/5] overflow-hidden rounded-xl bg-brand-primary shadow-lg sm:rounded-2xl sm:shadow-xl">
            {heroImages.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            ))}

            {/* Bottom gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 p-2.5 text-white sm:p-4 md:p-5 lg:p-6">
              <p className="text-[10px] font-medium leading-snug sm:text-xs md:text-sm lg:text-base">
                Inspiring excellence. Nurturing purpose.
              </p>

              <div
                className="mt-2 flex items-center gap-1 sm:mt-3 sm:gap-1.5 md:mt-4"
                role="group"
                aria-label={`Slide ${currentIndex + 1} of ${totalImages}`}
              >
                {heroImages.map((_, index) => (
                  <span
                    key={index}
                    aria-hidden="true"
                    className={`h-0.5 rounded-full transition-all duration-300 sm:h-1 ${
                      index === currentIndex
                        ? "w-4 bg-white sm:w-6"
                        : "w-1 bg-white/40 sm:w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue 
      <h2
        aria-label="Scroll to learn more about AICS"
        className="mx-auto mb-4 flex w-fit flex-col items-center gap-1 text-brand-primary/60 transition hover:text-brand-primary sm:mb-6 sm:gap-1.5"
      >
        <span className="text-[9px] uppercase tracking-widest sm:text-[11px]">
          Scroll
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
        >
          <path
            d="m7 10 5 5 5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </h2> */}
    </section>
  );
}