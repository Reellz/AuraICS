import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, formatDate } from "@/lib/events";

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Aura+International+Christian+School+Najjera+Uganda";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = EVENTS.find((item) => item.id === id);
  if (!event) notFound();

  const others = EVENTS.filter((item) => item.id !== event.id);

  return (
    <main className="bg-brand-cream px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <article className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Link
            href="/events"
            className="text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
          >
            All events
          </Link>
          {event.sample && (
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-orange">
              Sample listing
            </p>
          )}
          <h1 className="font-brand-header mt-2 text-4xl text-brand-green-900 sm:text-5xl">
            {event.title}
          </h1>
          <p className="mt-4 text-brand-green-900/70">{formatDate(event.date)}</p>
          <p className="body-text mt-6 text-base leading-relaxed text-brand-green-900/85 sm:text-lg">
            {event.summary}
          </p>
        </div>

        <aside className="lg:col-span-5">
          <div className="border-t border-brand-green-900/10">
            <h2 className="border-b border-brand-green-900/10 py-3 font-lato text-sm font-semibold uppercase tracking-wider text-brand-green-900">
              Details
            </h2>
            <dl className="divide-y divide-brand-green-900/10 text-sm">
              <div className="grid grid-cols-3 gap-3 py-3">
                <dt className="text-brand-green-900/50">Date</dt>
                <dd className="col-span-2 text-brand-green-900">{formatDate(event.date)}</dd>
              </div>
              {event.time && (
                <div className="grid grid-cols-3 gap-3 py-3">
                  <dt className="text-brand-green-900/50">Time</dt>
                  <dd className="col-span-2 text-brand-green-900">{event.time}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mt-8 border-t border-brand-green-900/10">
            <h2 className="border-b border-brand-green-900/10 py-3 font-lato text-sm font-semibold uppercase tracking-wider text-brand-green-900">
              Venue
            </h2>
            <p className="py-3 text-sm leading-relaxed text-brand-green-900">{event.location}</p>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
            >
              View map
            </a>
          </div>
        </aside>
      </article>

      {others.length > 0 && (
        <section className="mx-auto mt-16 max-w-5xl border-t border-brand-green-900/10 pt-10">
          <h2 className="font-lato text-sm font-semibold uppercase tracking-wider text-brand-green-900/50">
            Other events
          </h2>
          <ul className="mt-4">
            {others.map((item) => (
              <li key={item.id} className="border-b border-brand-green-900/10 py-3">
                <Link href={`/events/${item.id}`} className="font-lato text-base font-semibold text-brand-green-900 hover:text-brand-orange">
                  {item.title}
                </Link>
                <p className="text-sm text-brand-green-900/60">{formatDate(item.date)}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}