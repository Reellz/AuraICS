import Link from 'next/link'

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p>Could not find the requested resource.</p>
      <Link 
        href="/" 
        className="mt-4 px-4 py-2 bg-brand-gold text-white rounded"
      >
        Return Home
      </Link>
    </div>
  )
}
