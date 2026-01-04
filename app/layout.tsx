import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agneepath 7.0 - Ashoka University Sports Fest",
  description:
    "Official website for Agneepath 7.0, Ashoka University's premier sports festival",

  /* ✅ Favicons (Safari, Chrome, Brave safe) */
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },

  /* ✅ WhatsApp / LinkedIn / iMessage preview */
  openGraph: {
    title: "Agneepath 7.0",
    description: "Ashoka University’s premier sports festival",
    url: "https://agneepath.co.in",
    siteName: "Agneepath 7.0",
    images: [
      {
        url: "https://agneepath.co.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agneepath 7.0 – Ashoka University Sports Fest",
      },
    ],
    type: "website",
  },

  /* ✅ Twitter preview */
  twitter: {
    card: "summary_large_image",
    title: "Agneepath 7.0",
    description: "Ashoka University’s premier sports festival",
    images: ["https://agneepath.co.in/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-black">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
