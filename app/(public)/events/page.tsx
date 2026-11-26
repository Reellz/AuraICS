"use client";

import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

type SchoolEvent = {
  id: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
  video?: string;
  sample?: boolean;
};

const EVENTS: SchoolEvent[] = [
  {
    id: "project_showcase",
    title: "Project Showcase",
    date: "2026-12-30",
    summary:
      "Students will be showcasing projects that are derived from the skills training they have been receiving. Parents are requested to attend and support their children.",
    video: "/global/events/pro-show.mp4",
    sample: false,
  },
];

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

export default function EventsPage() {
  const events = [...EVENTS].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <main className="bg-brand-cream px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-brand-header text-4xl text-brand-green-900 sm:text-5xl">
          Our events
        </h1>

        {events.length === 0 ? (
          <p className="body-text mt-10 text-brand-green-900/70">
            No events are listed yet.
          </p>
        ) : (
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <li key={event.id}>
                <article className="flex h-full flex-col bg-white rounded-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-green-900 rounded-t-2xl rounded-b-1/2">
                    {event.video ? (
                      <video
                        className="absolute inset-0 h-full w-full object-cover"
                        src={event.video}
                        poster={event.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : event.image ? (
                      <Image
                        src={event.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col px-5 py-5 bg-brand-green-900/85 text-brand-cream rounded-b-2xl">
                    <p className="text-sm text-brand-cream">{formatDate(event.date)}</p>
                    <h2 className="font-lato mt-1 text-xl font-semibold text-[#ADEBB3]">
                      {event.title}
                      {event.sample ? (
                        <span className="ml-2 text-xs font-medium uppercase tracking-wider text-brand-green-900/40">
                          Sample
                        </span>
                      ) : null}
                    </h2>
                    <p className="body-text mt-3 line-clamp-3 text-sm ">
                      {event.summary}
                    </p>
                    <Link
                      href={`/events/${event.id}`}
                      className="mt-5 inline-flex font-lato text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
                    >
                      Find out more
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}

        <p className="body-text mt-12 text-sm text-brand-green-900/70">
          For anything not listed here,{" "}
          <Link
            href={ROUTES.contact}
            className="font-semibold text-brand-orange underline-offset-4 hover:underline"
          >
            contact the school
          </Link>
          .
        </p>
      </div>
    </main>
  );
}