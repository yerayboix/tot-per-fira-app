"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // No mostrar footer en la página de solicitar presupuesto
  if (pathname?.startsWith("/solicitar-presupuesto")) {
    return null;
  }
  
  return <Footer />;
} 