"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import sleepTrackerLogo from "@/assets/logo.png";
import sleepIllustration from "@/assets/illustration.png";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Sleep Tracker - Optimize Your Rest</title>
        <meta
          name="description"
          content="Monitor and optimize your sleep patterns with Sleep Tracker - your professional companion for better rest and energized mornings."
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-950 text-white font-sans">
        {/* Header */}
        <header className="bg-indigo-900/80 backdrop-blur-md shadow-lg py-4 sticky top-0 z-10">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={sleepTrackerLogo} alt="Sleep Tracker Logo" width={60} height={60} className="rounded-full" />
              <span className="ml-4 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                Sleep Tracker
              </span>
            </div>
            <nav className="flex items-center gap-8">
              <Link href="/login" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                Log In
              </Link>
              <Link href="/signup">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md">
                  Sign Up
                </button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Rest Better, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                Live Better
              </span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-md">
              Discover the power of restful sleep with our advanced tracking technology. Wake up refreshed and ready to conquer your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/signup">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Tracking
                </button>
              </Link>
              <Link href="/features">
                <button className="border-2 border-gray-200 text-gray-200 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 hover:text-indigo-900 transition-all duration-300">
                  Explore Features
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src={sleepIllustration} 
              alt="Sleep Illustration" 
              width={600} 
              height={400} 
              className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-indigo-900/50 py-8 text-gray-300 border-t border-indigo-800/50">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Sleep Tracker. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}