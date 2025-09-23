"use client";

import React from "react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      title: "Market Intelligence",
      subtitle: "From data to foresight",
      description: "MindReaderBio's AI-powered analysis engine goes beyond simple market tracking — it helps you anticipate patterns in biotech markets and understand where they may be trending. By learning from comprehensive market data, our forecasting model provides a clearer picture of what's ahead, offering insights that support more informed investment choices.",
      details: "With easy-to-read charts and real-time updates, market trends become easier to follow and understand. Notifications like 'Potential breakthrough in 30 days' or 'Stable growth trend' keep you aware of changes, so you can stay engaged with your investment journey.",
      icon: "📊"
    },
    {
      title: "FDA Insights", 
      subtitle: "Turn regulatory progress into opportunities",
      description: "MindReaderBio makes better investments not just achievable — but rewarding. Through our comprehensive FDA tracking system, every regulatory milestone becomes valuable intelligence.",
      details: "You can track approvals, clinical trial progressions, and regulatory pathways consistently. Each insight is proof of market movement, designed to inform and celebrate the developments that add up to big investment results.",
      icon: "🧬"
    },
    {
      title: "Investment Intelligence",
      subtitle: "Turn your research into real returns",
      description: "Our Intelligence Hub is where your research pays off. Every insight you gain through smart analysis can be applied to real investment value — from identifying undervalued companies to spotting breakthrough technologies.",
      details: "Our vision is to make better investing more accessible. By connecting your daily research with actionable insights, the Intelligence Hub turns analysis into something you can see, use, and benefit from. Whether it's accessing premium market data or identifying emerging opportunities, our platform ensures that every research step forward gives you something back.",
      icon: "💡"
    }
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
              <p className="text-lg text-blue-600 font-medium mb-6">
                "{feature.subtitle}"
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                {feature.description}
              </p>
              <p className="text-base">
                {feature.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
