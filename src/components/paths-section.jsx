"use client";

import React from "react";
import { motion } from "framer-motion";

export function PathsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Two Paths. One Goal: Better Investments.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're focused on pharmaceutical investments or biotech startups, MindReaderBio adapts to your journey with tools designed just for you.
          </p>
        </motion.div>

        {/* Two Paths */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Pharmaceutical Path */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Pharmaceutical Investment
              </h3>
              <p className="text-blue-600 font-medium mb-6">
                "Stay ahead of every market move"
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              MindReaderBio's AI-driven analysis engine tracks pharmaceutical companies' pipeline data to show patterns and trends unique to each company. With clear visualizations and real-time notifications, it helps you anticipate FDA approvals and stay engaged in your daily investment journey. Think of it as a co-pilot keeping you one step ahead.
            </p>
            
            <a
              href="/pharma"
              className="inline-block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start With Pharma
            </a>
          </motion.div>

          {/* Biotech Startups Path */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Biotech Startups
              </h3>
              <p className="text-blue-600 font-medium mb-6">
                "Small investments today, breakthrough returns tomorrow."
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              MindReaderBio applies advanced AI insights to help you understand how emerging biotech companies may impact future healthcare markets. With technology assessment guidance and personalized feedback, the platform makes smarter startup investment choices easier and more sustainable. It's science-backed support designed for your portfolio goals.
            </p>
            
            <a
              href="/startups"
              className="inline-block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start With Startups
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
