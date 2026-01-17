import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agneepath 7.0 - Ashoka University Sports Fest",
  description:
    "Official website for Agneepath 7.0, Ashoka University's premier sports festival",

  viewport: "width=device-width, initial-scale=1, maximum-scale=5",

  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },

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
    <html lang="en" className={openSans.variable}>
      <body className="antialiased bg-white text-black font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
  
