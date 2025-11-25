"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>

      <nav className="space-x-6">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
