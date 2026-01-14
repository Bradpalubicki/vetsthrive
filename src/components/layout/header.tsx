"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo.svg"
            alt="Veterans Thrive Foundation"
            width={180}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 animated-underline pb-1 ${
                scrolled
                  ? "text-[#1E3A5F] hover:text-[#B22234]"
                  : "text-white hover:text-[#FFD700]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/contact"
            className="btn-gold flex items-center gap-2 text-sm px-6 py-3"
          >
            <Heart className="w-4 h-4" />
            <span>Donate</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#1E3A5F]" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-white shadow-2xl transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-[#1E3A5F] hover:text-[#B22234] hover:bg-gray-50 transition-all py-4 px-4 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t mt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold flex items-center justify-center gap-2 w-full text-center"
            >
              <Heart className="w-5 h-5" />
              <span>Donate Now</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
