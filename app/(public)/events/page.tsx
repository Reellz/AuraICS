"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

type SchoolEvent = {
  id: string;
  title: string;
  date: string;
  summary: string;
  sample?: boolean;
};

/** Replace with real events. These rows are placeholders. */
const EVENTS: SchoolEvent[] = [
  {
    id: "sample-gathering",
    title: "Community gathering",
    date: "2026-12-05",
    summary:
      "Sample listing. Replace with the real time, place, and description.",
    sample: true,
  },
  {
    id: "sample-devotion",
    title: "Morning devotion",
    date: "2026-12-12",
    summary: "Sample listing. Replace with the real details.",
    sample: true,
  },
  {
    id: "sample-learning",
    title: "Learning showcase",
    date: "2026-12-18",
    summary: "Sample listing. Replace with the real details.",
    sample: true,
  },
];

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

function shortDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  }).format(new Date(`${iso}T00:00:00`));
}

export default function EventsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const events = [...EVENTS].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <main className="bg-brand-cream px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-brand-header text-4xl text-brand-green-900 sm:text-5xl">
          Our events
        </h1>

        {events.length === 0 ? (
          <p className="body-text mt-10 text-brand-green-900/70">
            No events are listed yet.
          </p>
        ) : (
          <ul className="mt-12 border-t border-brand-green-900/10">
            {events.map((event) => {
              const open = openId === event.id;
              return (
                <li
                  key={event.id}
                  className="border-b border-brand-green-900/10 py-6"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm text-brand-orange">
                        {shortDate(event.date)}
                      </p>
                      <h2 className="font-lato mt-1 text-xl font-semibold text-brand-green-900">
                        {event.title}
                        {event.sample ? (
                          <span className="ml-2 text-xs font-medium uppercase tracking-wider text-brand-green-900/40">
                            Sample
                          </span>
                        ) : null}
                      </h2>
                      <p className="mt-1 text-sm text-brand-green-900/60">
                        {formatDate(event.date)}
                      </p>
                    </div>
                    <Link
                      href={`/events/${event.id}`}
                      className="shrink-0 font-lato text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
                    >
                      Find out more
                    </Link>
                  </div>
                  {open && (
                    <p className="body-text mt-4 max-w-xl text-sm text-brand-green-900/80">
                      {event.summary}
                    </p>
                  )}
                </li>
              );
            })}
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
