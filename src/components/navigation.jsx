"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Insights", link: "/insights" },
    { name: "Contact", link: "/contact" },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-xl text-black">
            {/* Logo */}
            <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl"
          >
            <Image
              src="/logo3.png"
              alt="MindReaderBio Logo"
              width={100}
              height={100}
              priority
            />
            <span className="tracking-tight text-[#07beb8]">MindReaderBio</span>
          </Link>


          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
