"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const placeholders = [
    "What's your name?",
    "What's your email?",
    "What company do you work for?",
    "Tell us about your biotech interests...",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        alert(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative bg-black flex items-center justify-center">
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto px-8 py-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Ready to explore biotech opportunities? Connect with our expert team 
            for personalized insights and analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">📧</span>
                  <span className="text-neutral-300">contact@mindreaderbio.tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">📱</span>
                  <span className="text-neutral-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">📍</span>
                  <span className="text-neutral-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• Market Analysis & Intelligence</li>
                <li>• FDA Regulatory Insights</li>
                <li>• Investment Due Diligence</li>
                <li>• Clinical Trial Analysis</li>
                <li>• Technology Assessment</li>
                <li>• Strategic Consulting</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-8 border border-neutral-800">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  placeholder="Tell us about your biotech interests and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
