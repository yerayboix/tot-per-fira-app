"use client";

import { motion } from "motion/react";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  glitchDuration?: number;
  glitchDelay?: number;
}

export default function GlitchText({ 
  children, 
  className = "", 
  glitchDuration = 1,
  glitchDelay = 0.5
}: GlitchTextProps) {
  return (
    <div className="relative">
      <motion.div
        className={className}
        animate={{
          textShadow: [
            "0 0 0 transparent",
            "2px 2px 0 #0000, -2px -2px 0 var(--primary-color)",
            "0 0 0 transparent",
          ],
        }}
        transition={{
          duration: glitchDuration,
          repeat: Infinity,
          repeatDelay: glitchDelay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
} 