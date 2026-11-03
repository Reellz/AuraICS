import Image from "next/image";
import Link from "next/link";

export default function SchoolLife() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-16 hidden text-brand-primary/20 sm:block"
      >
        <svg
          width="80"
          height="32"
          viewBox="0 0 100 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
        >
          <path d="M0 20 Q25 0 50 20 T100 20" strokeLinecap="round" />
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-20 hidden text-brand-gold/50 sm:block"
      >
        <svg
          width="70"
          height="28"
          viewBox="0 0 100 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
        >
          <path d="M0 20 Q25 40 50 20 T100 20" strokeLinecap="round" />
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] top-6 hidden h-40 w-40 rounded-full bg-brand-gold/10 sm:block lg:right-[20%] lg:h-52 lg:w-52"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div className="relative z-10 max-w-xl">
          <p className="ui-label text-sm text-brand-primary">School Life</p>

          <h2 className="font-brand-header mt-3 text-4xl leading-[1.1] text-brand-green-900 sm:text-5xl lg:text-6xl">
            Life at <span className="text-brand-primary-mid">Aura International Christian School</span>
          </h2>

          <div className="body-text mt-6 space-y-4 text-base leading-relaxed text-brand-green-900/80 sm:text-lg">
            <p>
              Aura International Christian School is committed to nurturing the
              whole child through a Christ-centered approach to education that
              brings together academic excellence, spiritual growth, and
              personal development.
            </p>
            <p>
              Our teachers go beyond instruction to become mentors, guiding each
              student with care and understanding. By recognising individual
              strengths, gifts, learning styles, and abilities, we create an
              environment where every child is encouraged to grow, discover
              their potential, and flourish.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center rounded-lg bg-brand-primary px-6 py-3.5 font-lato text-base font-bold text-white transition hover:bg-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
          >
            Learn More
          </Link>
        </div>

        {/* Right: Photo collage */}
        <div className="relative mx-auto h-[480px] w-full max-w-md sm:h-[520px] lg:mx-0 lg:h-[560px] lg:max-w-none">
          {/* Main large photo (right side) */}
          <div className="absolute right-0 top-0 z-10 h-[68%] w-[58%] overflow-hidden rounded-2xl shadow-xl sm:h-[72%] sm:w-[60%]">
            <Image
              src="/global/home/life1.jpg"
              alt="Student reading in class"
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 30vw"
            />
          </div>

          {/* Small photo - top left */}
          <div className="absolute left-0 top-[12%] z-20 h-[36%] w-[42%] overflow-hidden rounded-2xl shadow-lg sm:top-[10%] sm:h-[38%]">
            <Image
              src="/global/home/life2.jpg"
              alt="Students in compound"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 40vw, 20vw"
            />
          </div>

          {/* Small photo - bottom right */}
          <div className="absolute bottom-0 right-[4%] z-10 h-[30%] w-[38%] overflow-hidden rounded-2xl shadow-md sm:h-[32%]">
            <Image
              src="/global/home/life3.jpg"
              alt="Classroom science lesson"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 35vw, 18vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
