"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "glass-nav py-3 shadow-lg"
            : "bg-transparent py-5"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/logo1.jpeg"
                  alt="KIECH"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className={`text-lg font-bold tracking-wide hidden sm:block transition-colors ${isScrolled ? 'text-[var(--slate-950)]' : 'text-[var(--slate-950)]'
                }`}>
                KIECH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.path} href={item.path} className="relative py-1 group/link">
                    <span
                      className={`text-sm font-medium transition-colors duration-200 ${isActive
                          ? "text-[var(--primary-900)]"
                          : "text-[var(--slate-600)] group-hover/link:text-[var(--primary-900)]"
                        }`}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-900)]`}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button
                  variant={isScrolled ? "default" : "secondary"}
                  size="sm"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`group flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden text-[var(--slate-900)] hover:bg-[var(--slate-100)]`}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-xs bg-white p-6 shadow-2xl md:hidden border-l border-[var(--slate-200)]"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-[var(--slate-950)] tracking-wide">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--slate-700)] transition-colors hover:bg-[var(--slate-100)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <div
                      key={item.path}
                      className="border-b border-[var(--slate-200)] last:border-0"
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between py-4"
                      >
                        <span
                          className={`text-base font-medium transition-colors ${isActive
                              ? "text-[var(--primary-900)]"
                              : "text-[var(--slate-600)] group-hover:text-[var(--primary-900)]"
                            }`}
                        >
                          {item.name}
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-[var(--primary-900)]" : "text-[var(--slate-400)]"
                            }`}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="default"
                    size="default"
                    className="w-full"
                  >
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
