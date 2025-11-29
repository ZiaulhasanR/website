"use client";

import { isHmrRefresh } from "next/dist/server/app-render/work-unit-async-storage.external";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Profile Card */}
        <div className="flex justify-center lg:justify-start">
          <div className="bg-gradient-to-br from-lime-400 via-emerald-400 to-purple-500 p-8 rounded-2xl shadow-2xl max-w-md transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Digital</h3>
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                MARKETING
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert</h3>

              <p className="text-blue-700 font-medium mb-6 leading-relaxed">
                The best and most professional service to help improve your
                business performance so that your income will increase more than
                before
              </p>

              <div className="flex items-center justify-center mb-6">
                {/* <div className="w-40 h-28 rounded-full border-8 border-white overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="Munifa Aktar"
                    className="w-full h-full object-cover"
                  />
                </div> */}
              </div>

              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>

                  <a
                    href="https://www.linkedin.com/in/munifa-akter-a9173a372/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-medium hover:underline"
                  >
                    linkedin.com/in/munifaakter
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-900 font-bold">
                    +8801865138342
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-white lg:text-left text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Digital Marketing
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 leading-relaxed">
            Expert in SEO, Lead Generation, and Social Media, Email Marketing
          </p>

          <button
            onClick={() =>
              (window.location.href = "https://www.facebook.com/munifa.akter.7")
            }
            className="px-10 py-4 bg-lime-400 text-gray-900 rounded-full font-bold text-lg hover:bg-lime-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
