"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, Globe2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import IconWrapper from './ui/IconWrapper';

export default function Footer() {
  return (
    <footer className="bg-[var(--slate-950)] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white/10 p-1.5">
                <Image
                  src="/logo1.jpeg"
                  alt="KIECH Industries Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[var(--slate-400)] text-sm leading-relaxed">
              Transforming businesses through innovative consulting solutions across diverse industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[var(--slate-400)] hover:text-white transition-colors duration-200 inline-block relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--slate-400)] hover:text-white transition-colors duration-200 inline-block relative group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-[var(--slate-400)] hover:text-white transition-colors duration-200 inline-block relative group"
                >
                  Industries
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[var(--slate-400)] hover:text-white transition-colors duration-200 inline-block relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-[var(--slate-400)]">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Strategic Planning
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Operations Improvement
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Digital Transformation
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Change Management
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <IconWrapper
                  icon={<Linkedin className="w-full h-full" />}
                  shape="circle"
                  size="sm"
                  customColor="rgba(255, 255, 255, 0.1)"
                  animate={true}
                />
              </a>
              <a
                href="mailto:info.kiechindustries@mexaly.com"
                className="group"
              >
                <IconWrapper
                  icon={<Mail className="w-full h-full" />}
                  shape="circle"
                  size="sm"
                  customColor="rgba(255, 255, 255, 0.1)"
                  animate={true}
                />
              </a>
              <a
                href="#"
                className="group"
              >
                <IconWrapper
                  icon={<Globe2 className="w-full h-full" />}
                  shape="circle"
                  size="sm"
                  customColor="rgba(255, 255, 255, 0.1)"
                  animate={true}
                />
              </a>
            </div>
            <Link href="/contact">
              <Button
                variant="accent"
                size="sm"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[var(--slate-400)] text-sm">
            &copy; 2025 KIECH Industries Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
