import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-6 text-center">
      <p className="ui-label text-sm text-brand-primary">Error 404</p>

      <h1 className="font-brand-header mt-4 text-6xl text-brand-green-900 sm:text-7xl lg:text-8xl">
        Page not found
      </h1>

      <p className="body-text mt-6 max-w-md text-base leading-relaxed text-brand-green-900/75 sm:text-lg">
        The page you’re looking for may have been moved, removed, or is
        temporarily unavailable.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-brand-orange px-6 py-3.5 font-lato text-base font-bold text-brand-green-900 transition hover:bg-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
      >
        Return to Homepage
      </Link>
    </main>
  );
}