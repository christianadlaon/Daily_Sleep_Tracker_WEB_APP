"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Sleep Tracker - Enhance Your Sleep Quality</title>
        <meta
          name="description"
          content="Track your sleep patterns and improve your sleep quality with our professional Sleep Tracker app."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6">
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Sleep Tracker Logo"
                width={50}
                height={50}
              />
              <span className="ml-3 text-white text-2xl font-bold">
                Sleep Tracker
              </span>
            </div>
            <nav className="space-x-4">
              <Link href="/login" className="text-white hover:underline">
                Log In
              </Link>
              <Link href="/signup" className="text-white hover:underline">
                Sign Up
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800">
                Enhance Your Sleep Quality
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Discover insights about your sleep patterns and improve your overall well-being. With our intuitive Sleep Tracker app, you can effortlessly track and analyze your sleep data.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link href="/signup">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
                    Get Started
                  </button>
                </Link>
                <Link href="/features">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Image
                src="/sleep_tracker_illustration.svg"
                alt="Sleep Tracker Illustration"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto text-center text-gray-600">
            &copy; {new Date().getFullYear()} Sleep Tracker. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
