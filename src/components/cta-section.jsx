"use client";

import React from "react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Your Role in a Biotech Revolution
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            What if you could help create a future where breakthrough biotech investments are identified before they even happen? The MindReaderBio Platform is your chance to do just that — to join a select group shaping the world's most advanced biotech investment intelligence. Are you ready to be part of the change?
          </p>

          <div className="space-y-4">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Waitlist
            </a>
            
            <div>
              <a
                href="/insights"
                className="text-blue-100 hover:text-white font-medium underline"
              >
                Start My Journey
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
