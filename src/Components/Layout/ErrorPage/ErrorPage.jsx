import React from 'react'

function ErrorPage() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
          <video
              src="/src/assets/Error-Vedio.mp4" // Replace with your video URL
              className="w-64 h-64 mb-4 rounded-lg"
              autoPlay
              loop
              muted
          />
          <h1 className="text-3xl font-bold text-red-600">Oops! Something went wrong.</h1>
          <p className="text-lg text-gray-700">The page you’re looking for doesn’t exist.</p>
          <a href="/" className="mt-4 px-6 py-2 text-white text-xl bg-emerald-900 rounded-lg hover:bg-green-600">
              Go Home
          </a>
      </div>

  )
}

export default ErrorPage