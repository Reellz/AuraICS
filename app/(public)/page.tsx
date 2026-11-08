import HomeHero from "../components/HomeHero";
import Column from "../components/Column";
import Card from "../components/ui/Card";
import SchoolLife from "../components/SchoolLife";
import Image from "next/image";
import Link from "next/link";

interface CardItem {
  src: string;
  alt: string;
  heading: string;
  text: string;
}

const cardData: CardItem[] = [
  {
    src: "/global/home/col3.jpg",
    alt: "A student participating in a classroom activity",
    heading: "Personalized Learning",
    text: "We recognize each child's unique abilities and learning needs, helping every student grow with confidence.",
  },
  {
    src: "/global/home/col1.jpg",
    alt: "Students working together on a classroom activity",
    heading: "Supportive Environment",
    text: "Our nurturing school community encourages curiosity, collaboration, and a love for learning.",
  },
  {
    src: "/global/home/col2.jpg",
    alt: "A teacher supporting students during a lesson",
    heading: "Learning for the Future",
    text: "We develop critical thinking, creativity, and practical skills that prepare students for tomorrow.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <HomeHero />
      <Column />

      {/* Personalized Learning section */}
      <section className="bg-brand-green-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="font-brand-header text-3xl text-brand-green-900 sm:text-4xl lg:text-5xl">
              An Individualized Learning Experience
              <br className="hidden sm:block" /> For Each Child
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {cardData.map((item) => (
              <Card
                key={item.heading}
                src={item.src}
                alt={item.alt}
                heading={item.heading}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
      <SchoolLife />
      <section className="bg-brand-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg sm:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="/global/home/hero1.jpg"
                alt="Student participating in a classroom activity"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text panel */}
            <div className="flex flex-col justify-center bg-brand-primary px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
              <h2 className="font-brand-header text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Start your child&apos;s academic journey at AuraICS
              </h2>

              <p className="body-text mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                At Aura International Christian School, we believe education
                goes beyond the classroom. Through our Christ-centred approach,
                the ACE curriculum, and personalised mentorship, we nurture each
                child&apos;s academic abilities, spiritual growth, and
                character. We are committed to raising godly, resourceful, and
                purposeful individuals equipped to make a meaningful difference
                in their communities and the world.
              </p>

              <Link
                href="/admissions"
                className="mt-8 inline-flex w-fit items-center rounded-lg bg-brand-orange px-6 py-3.5 font-lato text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50"
              >
                Begin the Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-green-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="ui-label text-sm text-brand-primary">Our Approach</p>

        <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl lg:text-5xl">
          Education shaped around the whole child
        </h2>

        <div className="mx-auto mt-4 h-0.5 w-16 bg-brand-gold" />

        <p className="body-text mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-green-900/80 sm:text-lg">
          Every programme at AuraICS is designed to support academic growth,
          spiritual formation, and character development together. We work
          alongside families to create an environment where students are known,
          challenged, and equipped for what comes next.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/academics"
            className="inline-flex items-center rounded-lg bg-brand-primary px-6 py-3.5 font-lato text-base font-bold text-brand-cream transition hover:bg-brand-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
          >
            Explore Academics
          </Link>
          <Link
            href="/admissions"
            className="inline-flex items-center rounded-lg border border-brand-primary/30 px-6 py-3.5 font-lato text-base font-bold text-brand-green-900 transition hover:border-brand-primary hover:bg-brand-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
          >
            Begin Admissions
          </Link>
        </div>
      </div>
    </section>
    </main>
  );
}
