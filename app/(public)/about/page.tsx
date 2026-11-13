"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/app/routes";
import { Target, Eye, Sun, ShieldCheck, Gauge, HeartHandshake } from "lucide-react";

const ABOUT_DATA = {
  missionVision: [
    {
      title: "Our Mission",
      text: "A community of fulfilled, Godly-Global citizens serving others excellently.",
    },
    {
      title: "Our Vision",
      text: "Equipping the next-generation for godly, resourceful, and purposeful living.",
    },
  ],
  coreValues: [
    {
      title: "Godliness",
      description:
        "We nurture hearts to honor God in thought, word, and deed, and to radiate His Glory.",
    },
    {
      title: "Integrity",
      description:
        "We cultivate honesty, responsibility, and strong moral character.",
    },
    {
      title: "Diligence",
      description:
        "We instill the culture of consistency, working hard and finishing strong.",
    },
    {
      title: "Humility",
      description:
        "We cultivate a heart of service following Christ's example.",
    },
  ],
  journey: [
    { year: "2019", context: "Started HillCity Homeschool." },
    {
      year: "2024",
      context:
        "Founded Aura International Christian School with a vision to nurture Godly citizens for global impact.",
    },
    {
      year: "2025",
      context:
        "Opened the gate for new students at our current campus in Najjera, Kira.",
    },
    {
      year: "2026",
      context: "Growing a community of fulfilled, Godly-Global citizens.",
    },
  ],
};

export default function AboutPage() {
  const [strategyOpen, setStrategyOpen] = useState(false);

  return (
    <main className="bg-brand-cream">
      {/* Hero */}
      <section className="relative min-h-[480px] sm:min-h-[560px]">
        <Image
          src="/global/about/hero-bg.jpg"
          alt="AICS campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-green-900/55" />
        <div className="relative z-10 flex min-h-[480px] items-end px-6 py-16 sm:min-h-[560px] sm:px-10 lg:px-16">
          <div className="max-w-2xl text-white">
            <h1 className="font-brand-header mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Aura International Christian School
            </h1>
            <p className="body-text mt-4 max-w-lg text-lg leading-relaxed text-white/90">
              Aura International C.S isn&apos;t only a school but a center
              through which your family is equipped to transform nations.
            </p>
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-brand-header text-3xl text-brand-green-900 sm:text-4xl">
            Our Identity
          </h2>
          <p className="body-text mt-6 text-lg leading-relaxed text-brand-green-900/80">
            The Aura Experience is a faith venture that transcends local
            boundaries. Our identity as Global Citizens is anchored in the
            biblical mandate of Matthew 5:16:{" "}
            <em className="text-brand-green-900">
              &quot;Let your light so shine before men, that they may see our
              good works and glorify your father in Heaven.&quot;
            </em>
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/global/about/principal.jpg"
                alt="Mrs. Sarah Bwambale - Principal"
                width={480}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm italic text-brand-green-900/70">
              Mrs. Sarah Bwambale — Principal
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-brand-header text-3xl text-brand-green-900 sm:text-4xl">
              Our History & Heritage
            </h2>
            <div className="body-text mt-6 space-y-4 text-base leading-relaxed text-brand-green-900/80 sm:text-lg">
              <p>
                AICS stems from the Home School of the Bwambales, employing the
                Accelerated Christian Education Curriculum, which started in
                2019 to cater for the unique learning needs of one of their
                children, who was struggling in the national system. The
                immediate change in this learner&apos;s academic and creative
                abilities motivated the rest of our children to join the Hill
                City Home School.
              </p>
              <p>
                After several years of experience and resource building with
                A.C.E., we sensed God calling us to share these blessings with
                the rest of His people. The strategic differentiator of AICS is
                the provision of a homely learning environment where parents are
                equipped to help shape a Godly generation. It is also our
                refusal to separate spiritual formation from academic rigor.
              </p>
              <p>
                In a competitive global economy, our dual focus ensures that our
                graduates are not only technically proficient but also morally
                unshakeable. Currently, some of our students are able to
                instruct others in Music, and one of them built this website.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setStrategyOpen(true)}
                className="inline-flex items-center rounded-lg bg-brand-primary px-6 py-3 font-lato text-base font-semibold text-white transition hover:bg-brand-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
              >
                Our Strategy
              </button>
              <Link
                href={ROUTES.gallery}
                className="inline-flex items-center rounded-lg border border-brand-primary/30 px-6 py-3 font-lato text-base font-semibold text-brand-green-900 transition hover:border-brand-primary hover:bg-brand-green-100"
              >
                Media Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Overlay */}
      {strategyOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-green-900/70 p-4"
          onClick={() => setStrategyOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setStrategyOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 p-2 text-brand-green-900/60 transition hover:text-brand-green-900"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <h2 className="font-brand-header text-2xl text-brand-green-900 sm:text-3xl">
              Our Strategy
            </h2>

            {/* Mission & Vision */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {ABOUT_DATA.missionVision.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-brand-primary/10 bg-brand-green-100/50 p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    {item.title === "Our Mission" ? (
                      <Target className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="font-branding-header2 text-lg text-brand-primary">
                    {item.title}
                  </h3>
                  <p className="body-text mt-2 text-sm leading-relaxed text-brand-green-900/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="mt-10">
              <h3 className="font-branding-header2 text-lg text-brand-green-900">
                Core Values
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {ABOUT_DATA.coreValues.map((value) => {
                  const icons: Record<string, JSX.Element> = {
                    Godliness: <Sun className="h-4 w-4" />,
                    Integrity: <ShieldCheck className="h-4 w-4" />,
                    Diligence: <Gauge className="h-4 w-4" />,
                    Humility: <HeartHandshake className="h-4 w-4" />,
                  };

                  return (
                    <div key={value.title} className="flex gap-3">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/15 text-brand-orange">
                        {icons[value.title]}
                      </div>
                      <div>
                        <h4 className="font-lato text-base font-semibold text-brand-green-900">
                          {value.title}
                        </h4>
                        <p className="body-text mt-1 text-sm leading-relaxed text-brand-green-900/75">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Journey */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-brand-header text-center text-3xl text-brand-green-900 sm:text-4xl">
            Our Journey
          </h2>

          <div className="relative mt-12">
            <div className="absolute left-4 top-0 h-full w-px bg-brand-primary/20 sm:left-1/2" />
            <div className="space-y-10">
              {ABOUT_DATA.journey.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden w-1/2 sm:block" />
                  <div className="absolute left-4 top-1 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-brand-gold sm:left-1/2" />
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      index % 2 === 0 ? "sm:pl-10" : "sm:pr-10 sm:text-right"
                    }`}
                  >
                    <p className="font-brand-header text-xl text-brand-primary">
                      {item.year}
                    </p>
                    <p className="body-text mt-1 text-sm leading-relaxed text-brand-green-900/80 sm:text-base">
                      {item.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
