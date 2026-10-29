import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  classname?: string;
};

export function PrimaryButton({ text, href, classname = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-3 py-2 text-xs font-bold font-lato text-brand-green-900 transition hover:bg-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 sm:mt-6 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm md:mt-7 md:px-6 md:py-3.5 md:text-base ${classname}`}
    >
      {text}
      <span aria-hidden="true">→</span>
    </Link>
  );
}