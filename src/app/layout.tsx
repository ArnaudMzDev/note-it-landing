import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note-It — Ton carnet musical social",
  description: "Découvre, note et partage ta passion pour la musique. Rejoins la bêta privée de Note-It.",
  openGraph: {
    title: "Note-It — Ton carnet musical social",
    description: "Découvre, note et partage ta passion pour la musique. Rejoins la bêta privée de Note-It.",
    url: "https://note-it.app",
    siteName: "Note-It",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Note-It — Ton carnet musical social",
    description: "Rejoins la bêta privée de Note-It.",
    images: ["/og.png"],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-bg text-ink`}>{children}</body>
    </html>
  );
}
