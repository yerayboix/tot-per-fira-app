"use client";

import { motion } from "motion/react";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  glitchDuration?: number;
  glitchDelay?: number;
  shadowColor1?: string;
  shadowColor2?: string;
}

export default function GlitchText({ 
  children, 
  className = "", 
  glitchDuration = 1,
  glitchDelay = 0.5,
  shadowColor1 = "#0000",
  shadowColor2 = "var(--primary-color)"
}: GlitchTextProps) {
  return (
    <div className="relative">
      <motion.div
        className={className}
        animate={{
          textShadow: [
            "0 0 0 transparent",
            `2px 2px 0 ${shadowColor1}, -2px -2px 0 ${shadowColor2}`,
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