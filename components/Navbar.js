'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Premium glass navbar with elegant transparency and refined mobile padding */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl px-4 sm:px-6 lg:px-16 py-2 border-b border-white/20 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left Side Group: Perfectly aligned, responsive logo */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link 
              href="/" 
              className="block relative h-12 md:h-14 w-auto focus:outline-none transition-all duration-300"
            >
              <img
                src="/logo.png"
                alt="Office Spaces Abuja — Premium Executive Workspaces"
                className="h-full w-auto object-contain transition-opacity duration-300 hover:opacity-85"
              />
            </Link>

            {/* Refined architectural separator with brand purple */}
            <div className="hidden sm:block h-8 w-[1px] bg-gradient-to-b from-transparent via-[#6D28D9]/40 to-transparent" />

            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.35em] text-[#52525B] font-light">
              Kubwa · Abuja
            </span>
          </div>

          {/* Desktop Links with refined brand accents */}
          <div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.2em] font-medium text-[#52525B]">

            <Link
              href="/spaces"
              className="hover:text-[#18181B] transition-colors duration-300 relative group py-1"
            >
              Spaces
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#6D28D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/infrastructure"
              className="hover:text-[#18181B] transition-colors duration-300 relative group py-1"
            >
              Infrastructure
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#6D28D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/about"
              className="hover:text-[#18181B] transition-colors duration-300 relative group py-1"
            >
              About
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#6D28D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#18181B] transition-colors duration-300 relative group py-1"
            >
              Contact
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#6D28D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Premium Purple CTA with soft glow */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative px-7 py-2.5 inline-block text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 bg-[#6D28D9] text-white hover:bg-[#7C3AED] hover:shadow-[0_4px_20px_rgba(109,40,217,0.25)] rounded-sm group"
            >
              <span className="relative z-10">
                Book Private Tour
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button with refined animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden text-[#18181B] focus:outline-none p-1.5 z-50 relative"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">

              <span
                className={`w-full h-[1.5px] bg-[#18181B] transition-all duration-300 origin-center ${
                  isOpen
                    ? 'rotate-45 translate-y-[8px]'
                    : ''
                }`}
              />

              <span
                className={`w-2/3 h-[1.5px] bg-[#6D28D9] ml-auto transition-all duration-300 ${
                  isOpen
                    ? 'opacity-0 scale-x-0'
                    : ''
                }`}
              />

              <span
                className={`w-full h-[1.5px] bg-[#18181B] transition-all duration-300 origin-center ${
                  isOpen
                    ? '-rotate-45 -translate-y-[8px]'
                    : ''
                }`}
              />

            </div>
          </button>

        </div>

        {/* Mobile Menu with refined premium feel */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 h-auto bg-white border-b border-[#EAEAEA] shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out origin-top transform ${
            isOpen
              ? 'opacity-100 scale-y-100 pointer-events-auto'
              : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col p-8 space-y-4 text-sm uppercase tracking-[0.15em] font-medium text-[#18181B] bg-white">

            <Link
              href="/spaces"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b border-[#EAEAEA] hover:text-[#6D28D9] transition-colors duration-200 flex justify-between items-center group"
            >
              Spaces
              <span className="text-xs text-[#6D28D9] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>

            <Link
              href="/infrastructure"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b border-[#EAEAEA] hover:text-[#6D28D9] transition-colors duration-200 flex justify-between items-center group"
            >
              Infrastructure
              <span className="text-xs text-[#6D28D9] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b border-[#EAEAEA] hover:text-[#6D28D9] transition-colors duration-200 flex justify-between items-center group"
            >
              About
              <span className="text-xs text-[#6D28D9] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-3 border-b border-[#EAEAEA] hover:text-[#6D28D9] transition-colors duration-200 flex justify-between items-center group"
            >
              Contact
              <span className="text-xs text-[#6D28D9] opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3.5 bg-[#6D28D9] text-white hover:bg-[#7C3AED] hover:shadow-[0_4px_20px_rgba(109,40,217,0.25)] text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300"
              >
                Book Private Tour
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}