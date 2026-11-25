import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const PROGRAMMES = [
  {
    title: "Early Childhood Development",
    text: "A nurturing foundation where young learners explore, create, and grow in a safe, supportive environment. We focus on early development, curiosity, and the beginnings of godly character.",
  },
  {
    title: "ACE Curriculum",
    text: "An individualised, mastery-based programme that integrates Christian values with academic learning. Students progress at their own pace through carefully sequenced materials from early years through secondary.",
    stages: ["Preschool", "Primary", "Secondary", "A-Level"],
  },
  {
    title: "Homeschooling Support",
    text: "Structured academic guidance and a Christian educational foundation for families who choose to educate at home. We partner with parents to provide resources, oversight, and community.",
  },
  {
    title: "Daycare Services",
    text: "A caring, nurturing environment for younger children and support for working parents. Children are known, cared for, and given space to play and grow.",
  },
];

const LEARNING_FEATURES = [
  {
    title: "Personalised learning & mentorship",
    text: "Each student works with guidance tailored to their level, pace, and needs.",
  },
  {
    title: "Spiritual development & discipleship",
    text: "Faith is woven into daily learning, not treated as a separate subject.",
  },
  {
    title: "Academic excellence",
    text: "Mastery of concepts comes before advancement, building a solid foundation.",
  },
  {
    title: "Creativity & innovation",
    text: "Students are encouraged to explore, create, and think critically.",
  },
  {
    title: "Character development",
    text: "Godliness, integrity, diligence, and humility shape how students learn and live.",
  },
  {
    title: "A supportive community",
    text: "Teachers, parents, and students work together in a homely learning environment.",
  },
];

const BEYOND = [
  "Creativity and exploration",
  "Social development",
  "Practical learning",
  "Community engagement",
  "Leadership and responsibility",
];

export default function AcademicsPage() {
  return (
    <main className="bg-brand-cream">
      {/* Hero */}
      <section className="relative min-h-[480px] sm:min-h-[560px]">
        <Image
          src="/global/academics/hero.jpg"
          alt="Students learning at Aura International Christian School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-green-900/55" />
        <div className="relative z-10 flex min-h-[480px] items-end px-6 py-16 sm:min-h-[560px] sm:px-10 lg:px-16">
          <div className="max-w-2xl text-white">
            <p className="ui-label text-sm text-brand-orange">Academics</p>
            <h1 className="font-brand-header mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Education that inspires excellence and purpose
            </h1>
            <p className="body-text mt-4 max-w-lg text-lg leading-relaxed text-white/90">
              At AuraICS we educate the mind, nurture the spirit, and develop
              the character of every learner. Growing to glow.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-8">
              <a
                href={ROUTES.contact}
                className="inline-flex items-center gap-1 rounded-4xl bg-brand-orange px-6 py-5 font-lato text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
              >
                Start your admission
                <ArrowUpRight />
              </a>
              <a
                href="#programmes"
                className="inline-flex items-center gap-1 rounded-4xl border border-white/50 bg-transparent px-6 py-5 font-lato text-base font-bold text-white transition hover:border-brand-orange/50 hover:bg-brand-green-600/50 hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Explore Our Programmes
                <ArrowDown />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="ui-label text-sm text-brand-orange">Our Approach</p>
            <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
              Christ-centred education for the whole child
            </h2>
            <div className="body-text mt-6 space-y-4 text-base leading-relaxed text-brand-green-900/80 sm:text-lg">
              <p>
                Education at AICS goes beyond academic achievement. We believe
                every learner is made in the image of God and is called to grow
                in knowledge, wisdom, and character.
              </p>
              <p>
                Our approach is individualised. Students progress at a pace that
                matches their understanding, with mentorship that helps them
                master concepts before moving forward. Critical thinking and
                problem-solving are developed alongside spiritual maturity.
              </p>
              <p>
                We work with parents to equip students for meaningful
                contributions to their families, communities, and the world.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/global/academics/hero2.jpg"
              alt="A student learning in class"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section
        id="programmes"
        className="scroll-mt-20 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="ui-label text-sm text-brand-orange">
                Our Programmes
              </p>
              <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
                Pathways for every stage
              </h2>
            </div>
            <p className="body-text max-w-sm text-sm leading-relaxed text-brand-green-900/70 sm:text-base">
              From early years through secondary, each pathway is shaped around
              the child and the family.
            </p>
          </div>

          <div className="mt-12 border-t border-brand-green-900/10">
            {PROGRAMMES.map((programme, index) => (
              <article
                key={programme.title}
                className="grid gap-4 border-b border-brand-green-900/10 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10"
              >
                <div className="sm:col-span-1">
                  <span className="font-brand-header text-2xl text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-branding-header2 text-2xl text-brand-green-900">
                    {programme.title}
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="body-text text-sm leading-relaxed text-brand-green-900/80 sm:text-base">
                    {programme.text}
                  </p>
                  {programme.stages && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {programme.stages.map((stage) => (
                        <span
                          key={stage}
                          className="text-xs font-semibold uppercase tracking-wider text-brand-orange"
                        >
                          {stage}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="bg-brand-primary px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="ui-label text-sm text-brand-orange">
              The AICS Learning Experience
            </p>
            <h2 className="font-brand-header mt-3 text-3xl sm:text-4xl">
              What sets learning apart
            </h2>
            <p className="body-text mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
              Six commitments that shape how a student is taught, known, and
              formed at AuraICS.
            </p>
          </div>

          <ol className="lg:col-span-8">
            {LEARNING_FEATURES.map((feature, index) => (
              <li
                key={feature.title}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-white/15 py-5 first:border-t-0 first:pt-0"
              >
                <span className="font-brand-header text-lg text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-lato text-base font-semibold sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="body-text mt-1 text-sm leading-relaxed text-white/75">
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Beyond the Classroom — cream, not another green band */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/global/academics/learner.jpg"
              alt="Students and staff gathered together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="ui-label text-sm text-brand-orange">
              Beyond the Classroom
            </p>
            <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
              Well-rounded learners
            </h2>
            <p className="body-text mt-6 text-base leading-relaxed text-brand-green-900/80">
              Learning at AICS extends beyond academic subjects. Students are
              given space for creativity, social growth, and practical
              experiences that connect classroom learning to real life. We
              encourage responsibility and a habit of serving others
              excellently.
            </p>
            <ul className="mt-6 space-y-2">
              {BEYOND.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-brand-green-900"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Parents + admissions share one close, so the page does not end on two stacked CTAs */}
      <section className="border-t border-brand-green-900/10 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="ui-label text-sm text-brand-orange">
              Our Commitment to Parents
            </p>
            <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
              Partners in your child’s growth
            </h2>
            <p className="body-text mt-6 text-base leading-relaxed text-brand-green-900/80">
              Parents are the primary educators of their children. AICS works
              alongside families to support academic progress, spiritual
              development, and character formation.
            </p>
            <Link
              href={ROUTES.about}
              className="mt-8 inline-flex items-center font-lato text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
            >
              Discover AICS
            </Link>
          </div>

          <div className="bg-brand-primary px-8 py-10 text-white rounded-2xl sm:px-10">
            <h2 className="font-brand-header text-3xl leading-tight">
              An education that goes beyond the classroom
            </h2>
            <p className="body-text mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              Explore the opportunities available at Aura International
              Christian School. We would be glad to walk with your family.
            </p>
            <div className="mt-8 gap-3">
              <Link
                href={ROUTES.contact}
                className=" rounded-xl bg-brand-orange px-5 py-3 font-lato text-sm font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
