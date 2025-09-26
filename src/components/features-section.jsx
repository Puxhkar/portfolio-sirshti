"use client";

import React from "react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
   

  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-20 last:mb-0"
          >
            <div className="text-center mb-12">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {feature.title}
              </h2>
              <p className="text-lg text-[#07beb8] font-medium mb-6">
                {feature.subtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">{feature.description}</p>
              <p className="text-base">{feature.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
