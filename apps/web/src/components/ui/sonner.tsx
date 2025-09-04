"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "white",
          "--normal-text": "var(--secondary-color)",
          "--normal-border": "#000000",
          "--success-bg": "var(--complementary-color-green)",
          "--success-text": "white",
          "--error-bg": "#ef4444",
          "--error-text": "white",
        } as React.CSSProperties
      }
      cn={(className) => 
        `${className} [&>li]:border-2 [&>li]:border-black [&>li]:shadow-[2px_2px_0px_0px_#000000] [&>li]:rounded-none [&>li]:font-clash-display [&>li]:font-medium`
      }
      {...props}
    />
  );
};

export { Toaster };
