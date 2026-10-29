import HomeHero from "../components/HomeHero";
import Column from "../components/Column";
import Card from "../components/ui/Card";

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
              A Personalized Learning Experience
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
    </main>
  );
}