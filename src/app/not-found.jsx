// app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}