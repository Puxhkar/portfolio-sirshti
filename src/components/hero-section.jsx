"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            Smarter Biotech,
            <br />
            <span className="text-blue-600">Better Markets</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to MindReaderBio – your trusted co-pilot for smarter biotech investment decisions and market intelligence.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              📊 Market Analysis
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              🧬 FDA Insights
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              💡 Investment Intelligence
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link
              href="/insights"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Start Your Journey
            </Link>
          </div>

          {/* Secondary CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              Join Our Waitlist
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
