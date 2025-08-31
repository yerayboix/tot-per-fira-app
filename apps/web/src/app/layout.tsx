import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, Montserrat } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { Navbar } from "@/components/navbar";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

const khand = localFont({
  src: [
    {
      path: "../public/fonts/Khand-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Khand-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Khand-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Khand-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Khand-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Khand-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: "TOT PER FIRA",
  description: "TOT PER FIRA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${montserrat.variable} ${clashDisplay.variable} ${khand.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen">
            <Navbar />
            <main>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
