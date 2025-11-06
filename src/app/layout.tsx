import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://truebpm.fr"),
  title: {
    default: "TrueBPM — Ton carnet musical social",
    template: "%s | TrueBPM",
  },
  description:
      "TrueBPM est ton carnet musical social. Découvre, note et partage tes musiques, albums et artistes favoris au sein d'une communauté passionnée.",
  keywords: [
    "TrueBPM",
    "musique",
    "note musicale",
    "application sociale",
    "BPM",
    "carnet musical",
    "albums",
    "artistes",
    "découverte musicale",
    "communauté musique",
    "écoute",
  ],
  authors: [{ name: "TrueBPM", url: "https://truebpm.fr" }],
  creator: "TrueBPM",
  publisher: "TrueBPM",
  alternates: {
    canonical: "https://truebpm.fr",
  },
  openGraph: {
    title: "TrueBPM — Ton carnet musical social",
    description:
        "Découvre, note et partage ta passion pour la musique sur TrueBPM, la plateforme où chaque battement compte.",
    url: "https://truebpm.fr",
    siteName: "TrueBPM",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrueBPM — Ton carnet musical social",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueBPM — Ton carnet musical social",
    description:
        "Rejoins la communauté TrueBPM et partage tes découvertes musicales.",
    creator: "@TrueBPM",
    images: ["/og-image.png"],
  },
  // ✅ Correction : favicon unique en PNG + Apple touch
  icons: {
    icon: [
      { url: "/faviconn.png", sizes: "32x32", type: "image/png" },
      { url: "/faviconn.png", sizes: "192x192", type: "image/png" },
      { url: "/faviconn.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/faviconn.png", sizes: "180x180", type: "image/png" },
    shortcut: { url: "/faviconn.png", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  themeColor: "#9B5CFF",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-google-site-verification", // optionnel
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="fr" prefix="og: https://ogp.me/ns#">
      <head>
        {/* ✅ Fallback manuel pour anciens navigateurs */}
        <link rel="icon" href="/faviconn.png" type="image/png" />
        <link rel="apple-touch-icon" href="/faviconn.png" />
      </head>
      <body className={`${inter.className} bg-bg text-ink`}>
      <Header />

      {/* ✅ Données structurées JSON-LD */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TrueBPM",
              url: "https://truebpm.fr",
              logo: "https://truebpm.fr/favicon.png",
              sameAs: [
                "https://twitter.com/TrueBPM",
                "https://www.instagram.com/TrueBPM",
              ],
              description:
                  "TrueBPM est une application sociale pour les passionnés de musique — découvre, note et partage tes sons préférés.",
            }),
          }}
      />

      {children}
      </body>
      </html>
  );
}