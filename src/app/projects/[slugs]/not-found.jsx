// src/app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          href="/"
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}