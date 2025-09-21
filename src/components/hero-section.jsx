"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import DNAHelixCanvas from "./dna-helix";

export function HeroSection() {
  return (
    <AuroraBackground>
      <DNAHelixCanvas />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          MindReader<span className="text-green-400">Bio</span>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center max-w-4xl">
          Bridging Science and Markets in Biotechnology
        </div>
        <div className="text-sm md:text-lg dark:text-neutral-300 text-center max-w-2xl mb-8">
          Providing scientifically credible biotech insights through cutting-edge intelligence 
          platform powered by advanced analytics and market research.
        </div>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          onClick={() => window.location.href = '/insights'}
        >
          Explore Insights
        </Button>
      </motion.div>
    </AuroraBackground>
  );
}
