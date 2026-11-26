"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

type Photo = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

const PHOTOS: Photo[] = [
  {
    id: "class",
    src: "/global/gallery/gal1.jpg",
    alt: "Morning devotion at Aura International Christian School",
    title: "Morning Devotion",
  },
  {
    id: "student",
    src: "/global/gallery/gal2.jpg",
    alt: "Nursery students in class",
    title: "Class-in-session",
  },
  {
    id: "gathering",
    src: "/global/gallery/gal3.jpg",
    alt: "AICS students together",
    title: "Students' portrait",
  },
  {
    id: "campus",
    src: "/global/about/hero-bg.jpg",
    alt: "The AICS campus",
    title: "Campus Entrance",
  },
  {
    id: "principal",
    src: "/global/about/principal.jpg",
    alt: "Mrs. Sarah Bwambale, Principal",
    title: "Principal",
  },
];

function repeat(list: Photo[], times: number) {
  return Array.from({ length: times }, () => list).flat();
}

export default function GalleryPage() {
  const [active, setActive] = useState<Photo | null>(null);
  const [motion, setMotion] = useState(true);
  const left = repeat(
    PHOTOS.filter((_, index) => index % 2 === 0),
    2,
  );
  const right = repeat(
    PHOTOS.filter((_, index) => index % 2 === 1),
    3,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!active) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <main className="bg-[#ADEBB3]/30 px-3 py-4 sm:px-6 sm:py-8 lg:min-h-screen">
      <style>{`
        @keyframes column-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes column-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .column-up { animation: column-up 36s linear infinite; }
        .column-down { animation: column-down 36s linear infinite; }
        .column-paused { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .column-up, .column-down { animation: none; }
        }
      `}</style>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col overflow-hidden rounded-[28px] bg-brand-cream lg:flex-row">
        <div className="flex flex-col justify-between px-6 py-8 sm:px-10 sm:py-12 lg:w-[42%] lg:py-14">
          <p className="font-lato text-sm tracking-wide text-brand-green-900/70">
            Aura-ICS in frames.
          </p>
          <h1 className="font-brand-header mt-10 text-5xl leading-[0.9] text-brand-orange sm:text-6xl lg:mt-0 lg:text-7xl">
            EVERY
            <br />
            MOMENT
            <br />
            TELLS A
            <br />
            STORY
          </h1>
          <p className="body-text mt-10 max-w-xs text-sm leading-relaxed text-brand-green-900/75 lg:mt-0">
            Discover life at Aura International Christian School through moments
            of learning, growth, and community.
          </p>
          <Link
            href={ROUTES.academics}
            className="mt-8 inline-flex w-fit font-lato text-sm font-semibold text-brand-orange underline-offset-4 hover:underline lg:hidden"
          >
            Explore Admissions
          </Link>
        </div>

        <div className="relative min-h-[70vh] flex-1 overflow-hidden lg:min-h-0">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-brand-orange/80 sm:h-20" />
          <div className="grid h-[70vh] grid-cols-2 gap-x-4 overflow-hidden px-4 pt-20 sm:gap-x-6 sm:px-6 lg:h-full lg:max-h-[calc(100vh-4rem)]">
            <Column
              photos={left}
              direction="up"
              motion={motion}
              onOpen={setActive}
            />
            <Column
              photos={right}
              direction="down"
              motion={motion}
              onOpen={setActive}
            />
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-green-900/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <figure
            className="w-full max-w-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-white">
              {active.title}
            </figcaption>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="mt-3 text-sm font-semibold text-brand-orange"
            >
              Close
            </button>
          </figure>
        </div>
      )}
    </main>
  );
}

function Column({
  photos,
  direction,
  motion,
  onOpen,
}: {
  photos: Photo[];
  direction: "up" | "down";
  motion: boolean;
  onOpen: (photo: Photo) => void;
}) {
  const [paused, setPaused] = useState(false);
  const loop = [...photos, ...photos];

  return (
    <div
      className="h-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={
          motion
            ? direction === "up"
              ? "column-up"
              : "column-down"
            : undefined
        }
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {loop.map((photo, index) => (
          <button
            key={`${photo.id}-${index}`}
            type="button"
            onClick={() => onOpen(photo)}
            className="mb-8 block w-full text-left"
          >
            <span className="relative block aspect-[4/5] overflow-hidden bg-brand-green-900/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="30vw"
              />
            </span>
            <span className="mt-2 block font-lato text-sm text-brand-green-900">
              {photo.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
