import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, Montserrat } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { Navbar } from "@/components/navbar";
import localFont from "next/font/local";
import { ConditionalFooter } from "@/components/conditional-footer";
import { unstable_ViewTransition as ViewTransition } from 'react'
import { structuredData } from "@/lib/structured-data";
import CookieBanner from "@/components/analytics/cookie-banner";
import ConditionalGoogleAnalytics from "@/components/analytics/conditional-google-analytics";

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
      path: "../../public/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

const khand = localFont({
  src: [
    {
      path: "../../public/fonts/Khand-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Khand-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Khand-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Khand-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Khand-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Khand-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: {
    default: "Tot Per Fira - Alquiler de equipos de sonido, congeladores, venta de bebidas y organización de eventos en Onda, Castellón",
    template: "%s | Tot Per Fira"
  },
  description: "Tot Per Fira ofrece soluciones completas para fiestas, eventos y celebraciones en Onda y provincia de Castellón. Alquiler de equipos de sonido, congeladores, botelleros, grifos de cerveza, organización de barras y servicio de personal. Más de 10 años de experiencia trabajando con peñas, ayuntamientos y eventos particulares.",
  keywords: [
    "alquiler sonido Onda",
    "equipos música fiestas Castellón",
    "organización eventos Onda",
    "congeladores alquiler",
    "botelleros fiestas",
    "grifos cerveza",
    "barras eventos",
    "peñas Castellón",
    "fiestas populares",
    "sonido profesional",
    "eventos Betxí",
    "celebraciones Vila-Real",
    "material fiestas",
    "hielo eventos",
    "montaje desmontaje",
    "personal barra",
    "Tot Per Fira",
    "alquiler equipos de sonido",
    "alquiler congeladores",
    "venta de bebidas",
    "organización de eventos",
    "Onda, Castellón",
    "venta de bebidas",
    "Fira d'Onda",
    "Feria de Onda",
  ],
  authors: [{ name: "Tot Per Fira" }],
  creator: "Tot Per Fira",
  publisher: "Tot Per Fira",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://totperfira.es"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://totperfira.es",
    title: "Tot Per Fira - Alquiler de equipos de sonido, congeladores, venta de bebidas y organización de eventos en Onda, Castellón",
    description: "Soluciones completas para fiestas y eventos en Castellón. Alquiler de equipos de sonido, congeladores, organización de barras y más. Servicio profesional con más de 10 años de experiencia.",
    siteName: "Tot Per Fira",
          images: [
        {
          url: "/images/LOGO_Cuadrado_fondo_azul.jpg",
          width: 1200,
          height: 630,
          alt: "Tot Per Fira - Alquiler de equipos de sonido, congeladores, venta de bebidas y organización de eventos en Onda, Castellón",
        },
      ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tot Per Fira - Alquiler de equipos de sonido, congeladores, venta de bebidas y organización de eventos en Onda, Castellón",
    description: "Soluciones completas para fiestas y eventos en Castellón. Alquiler de equipos de sonido, congeladores, venta de bebidas y organización de eventos en Onda, Castellón.",
    images: ["/images/LOGO_Cuadrado_fondo_azul.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "Servicios de Eventos",
  classification: "Alquiler de Equipos y Organización de Eventos",
  other: {
    "geo.region": "ES-VC",
    "geo.placename": "Onda, Castellón",
    "geo.position": "39.9687;-0.2625", // Coordenadas aproximadas de Onda
    "ICBM": "39.9687, -0.2625",
    "business:contact_data:locality": "Onda",
    "business:contact_data:region": "Castellón",
    "business:contact_data:country_name": "España",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${montserrat.variable} ${clashDisplay.variable} ${khand.variable} antialiased scroll-smooth`}
      >
        <Providers>
          <ViewTransition>
            <div className="min-h-screen">
              <Navbar />
              <main>

                {children}
                <CookieBanner />
              </main>
              <ConditionalFooter />
            </div>
            <ConditionalGoogleAnalytics />
          </ViewTransition>
        </Providers>
      </body>
    </html>
  );
}
