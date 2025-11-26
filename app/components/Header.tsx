"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          Munifa Aktar
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link 
            href="#home" 
            className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium"
          >
            About
          </Link>
          <Link 
            href="#skills" 
            className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium"
          >
            Skills
          </Link>
          <Link 
            href="#experience" 
            className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium"
          >
            Experience
          </Link>
          <Link 
            href="#projects" 
            className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium"
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
