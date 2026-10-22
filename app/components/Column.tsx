"use client";

import { useState } from "react";
import Image from "next/image";

const whyItems = [
  {
    title: "Holistic Excellence",
    description: "Blending academic rigour with deep spiritual formation.",
    image: "/global/home/why1.svg",
    details:
      "We nurture the whole student through academic excellence, spiritual growth, character development, and practical learning.",
    bg: "bg-[#e69443]",
    color: "#e07b39",
  },
  {
    title: "Nurturing Community",
    description:
      "Fostering a Christ-centered, homely environment in partnership with families.",
    image: "/global/home/why2.svg",
    details:
      "We build meaningful relationships between students, teachers, families, and the wider school community.",
    bg: "bg-[#2A6F7F]",
    color: "#2A6F7F",
  },
  {
    title: "Future Ready",
    description: "Cultivating the creative and technical skills for tomorrow.",
    image: "/global/home/why3.svg",
    details:
      "We equip students with creativity, digital skills, critical thinking, and problem-solving abilities for the future.",
    bg: "bg-[#1A4A4A]",
    color: "#1A4A4A",
  },
];

export default function Column() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  function toggleCard(index: number) {
    setExpandedCards((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index],
    );
  }

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-11">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-brand-header text-3xl text-brand-green-900 sm:text-4xl lg:text-5xl">
            Why Aura?
          </h2>
        </div>

        {/* Connected cards */}
        <div className="overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {whyItems.map((item, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <div
                  key={item.title}
                  className={`relative isolate flex flex-col items-start overflow-hidden px-6 py-8 text-white sm:px-7 sm:py-10 lg:px-8 lg:py-12 ${item.bg}`}
                >
                  {/* Subtle brand-colour overlay */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 -z-10 ${item.bg} opacity-85`}
                  />

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center sm:mb-8 sm:h-20 sm:w-20">
                    <Image
                      src={item.image}
                      alt=""
                      width={80}
                      height={80}
                      className="why-orange-icon object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-branding-header2 text-base uppercase tracking-wide sm:text-lg lg:text-xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90 sm:text-base">
                    {item.description}
                  </p>

                  {/* Learn More button */}
                  <button
                    type="button"
                    onClick={() => toggleCard(index)}
                    aria-expanded={isExpanded}
                    aria-controls={`why-expand-${index}`}
                    style={
                      {
                        "--button-color": item.color,
                      } as React.CSSProperties
                    }
                    className="mt-6 inline-flex items-center justify-center rounded-full hover:border-2 bg-white px-6 py-2.5 text-sm text-[var(--button-color)] font-semibold transition-colors duration-200 hover:border-white hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:mt-8"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>

                  {/* Expandable details */}
                  <div
                    id={`why-expand-${index}`}
                    hidden={!isExpanded}
                    className="w-full"
                  >
                    <p className="mt-4 text-sm leading-relaxed text-white/90">
                      {item.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
