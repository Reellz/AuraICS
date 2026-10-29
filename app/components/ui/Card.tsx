import Image from "next/image";

type CardProps = {
  src: string;
  heading: string;
  text: string;
  classname?: string;
  alt?: string;
};

export default function Card({
  heading,
  text,
  src,
  classname = "",
  alt = "",
}: CardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-brand-cream shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${classname}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-branding-header2 text-xl text-brand-orange sm:text-2xl">
          {heading}
        </h3>
        <p className="body-text mt-3 flex-1 text-sm leading-relaxed text-brand-green-900/75 sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}