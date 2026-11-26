import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, formatDate } from "@/lib/events";
import { ArrowLeftCircle } from "lucide-react";

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
      <article className="mx-auto max-w-5xl">
        <Link
          href="/events"
          className="text-sm font-semibold text-brand-orange underline-offset-4 hover:underline flex gap-2"
        >
          <ArrowLeftCircle />
          All events
        </Link>

        {(event.video || event.image) && (
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl bg-brand-green-900 shadow-[0_22px_50px_-18px_rgba(224,123,57,0.65)]">
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
            ) : (
              <Image
                src={event.image!}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 64rem"
              />
            )}
          </div>
        )}

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {event.sample && (
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Sample listing
              </p>
            )}
            <h1 className="font-brand-header mt-2 text-4xl text-brand-green-900 sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-4 text-brand-green-900/70">
              {formatDate(event.date)}
            </p>
            <p className="body-text mt-6 text-base leading-relaxed text-brand-green-900/85 sm:text-lg">
              {event.summary}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="">
              <h2 className="border-b border-brand-green-900/10 py-3 font-lato text-sm font-semibold uppercase tracking-wider text-brand-green-900">
                Details
              </h2>
              <dl className=" text-sm">
                <div className="grid grid-cols-3 gap-2 py-3">
                  <dt className="text-brand-green-900/50">Date</dt>
                  <dd className="col-span-2 text-brand-green-900">
                    {formatDate(event.date)}
                  </dd>
                </div>
                {event.time && (
                  <div className="grid grid-cols-3 gap-2 py-3">
                    <dt className="text-brand-green-900/50">Time</dt>
                    <dd className="col-span-2 text-brand-green-900">
                      {event.time}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="mt-3">
              <h2 className="border-b border-brand-green-900/10 py-3 font-lato text-sm font-semibold uppercase tracking-wider text-brand-green-900">
                Venue
              </h2>
              <p className="py-3 text-sm leading-relaxed text-brand-green-900">
                {event.location}
              </p>
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
        </div>
      </article>

      {others.length > 0 && (
        <section className="mx-auto mt-16 max-w-5xl border-t border-brand-green-900/10 pt-10">
          <h2 className="font-lato text-sm font-semibold uppercase tracking-wider text-brand-green-900/50">
            Other events
          </h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/events/${item.id}`}
                  className="group block bg-white"
                >
                  {(item.video || item.image) && (
                    <span className="relative block aspect-[16/10] overflow-hidden bg-brand-green-900">
                      {item.video ? (
                        <video
                          className="absolute inset-0 h-full w-full object-cover"
                          src={item.video}
                          poster={item.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={item.image!}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      )}
                    </span>
                  )}
                  <span className="block px-4 py-4">
                    <span className="block text-sm text-brand-orange">
                      {formatDate(item.date)}
                    </span>
                    <span className="font-lato mt-1 block text-base font-semibold text-brand-green-900 group-hover:text-brand-orange">
                      {item.title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
