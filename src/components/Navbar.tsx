"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
          : "bg-white/70 backdrop-blur-md border-b border-white/30"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 overflow-hidden rounded-lg transition-transform group-hover:scale-105">
              <Image
                src="/company-logo.png"
                alt="EXPLORE IT SERVICES PVT LTD logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-heading text-[13px] sm:text-sm leading-5 text-slate-900 tracking-wide uppercase">
              <span className="block">EXPLORE IT </span>
              <span className="block text-primary-500">SERVICES PVT LTD.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-primary-700 bg-primary-50"
                    : "text-slate-800 hover:text-primary-700 hover:bg-sand-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sand-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            <div className="relative w-[22px] h-[22px]">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute left-0 top-[4px] h-[2px] w-full bg-slate-900 rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 top-[10px] h-[2px] w-full bg-slate-900 rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute left-0 top-[16px] h-[2px] w-full bg-slate-900 rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu backdrop"
                className="md:hidden fixed inset-0 top-16 bg-slate-950/35 backdrop-blur-[1px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                id="mobile-nav-menu"
                className="md:hidden absolute left-5 right-5 sm:left-8 sm:right-8 top-full mt-3 rounded-2xl border border-sand-200/80 bg-white/95 backdrop-blur-xl shadow-[0_20px_45px_rgba(15,23,42,0.16)] overflow-hidden"
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="p-3">
                  <div className="h-1.5 w-14 rounded-full bg-slate-200 mx-auto my-2" />
                  <div className="mt-2 flex flex-col gap-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, delay: i * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-4 py-3.5 text-sm font-medium rounded-xl transition-colors ${
                            pathname === link.href
                              ? "text-primary-700 bg-primary-50"
                              : "text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, delay: 0.14 }}
                  >
                    <Link
                      href="/contact"
                      className="mt-3 block px-5 py-3.5 text-sm font-semibold text-center text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
