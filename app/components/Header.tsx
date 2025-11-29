"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        scrolled ? "bg-green-500 shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
        >
          Digital Marketer
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-[#ffffff] hover:text-[#6366f1] transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-[#ffffff] hover:text-[#6366f1] transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-[#ffffff] hover:text-[#6366f1] transition-colors font-medium"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-[#ffffff] hover:text-[#6366f1] transition-colors font-medium"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-[#ffffff] hover:text-[#6366f1] transition-colors font-medium"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-[#ffffff] hover:text-[#6366f1] transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0  bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-gradient-to-br from-green-500 to-green-600 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <span className="text-xl font-bold text-white">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-6 py-6 space-y-1">
          <Link
            href="/"
            className="text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
