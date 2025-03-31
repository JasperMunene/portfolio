// @flow strict
'use client'
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-[#16f2b3] text-3xl font-bold cursor-pointer">
              Jasper Munene
            </span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="inline-flex items-center rounded-md p-2 text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute left-0 right-0 top-16 z-10 w-full bg-black px-4 py-4 shadow-md md:relative md:top-0 md:z-auto md:flex md:w-auto md:items-center md:space-x-4 md:bg-transparent md:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { href: "#about", label: "ABOUT" },
            { href: "#experience", label: "EXPERIENCE" },
            { href: "#skills", label: "SKILLS" },
            { href: "#education", label: "EDUCATION" },
            { href: "#projects", label: "PROJECTS" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600 md:inline-block"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
