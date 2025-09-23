"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const pageVariants = {
    initial: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: shouldReduceMotion ? 0.1 : 0.5,
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
