"use client";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fadeInUp">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="gradient-text">
            Munifa Aktar
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Creative Professional | Designer | Developer
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Passionate about creating beautiful, functional, and user-centered digital experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#projects"
            className="px-8 py-4 gradient-bg text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-300 hover:border-indigo-500 hover:text-indigo-600 hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
