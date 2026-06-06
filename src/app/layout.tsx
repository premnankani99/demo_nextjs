import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollObserver from "./components/ScrollObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxe Beauty Studio | Premium Salon & Nail Artistry, C-Scheme, Jaipur",
  description: "Experience absolute beauty at Luxe Beauty Studio, Jaipur's premier salon in C-Scheme. Specializing in flawless gel nail extensions, couture haircuts, rejuvenating spa pedicures, and stress-relief therapies. Request your premium booking today.",
  keywords: [
    "Luxe Beauty Studio",
    "Luxe Beauty Studio Jaipur",
    "best salon in C-Scheme, Jaipur",
    "salon in Jaipur",
    "best nail extensions Jaipur",
    "Sophia nail extensions",
    "Alex haircut stylist Jaipur",
    "luxury pedicure C-Scheme, Jaipur",
    "Jaipur beauty parlour reviews",
    "Luxe salon Jaipur"
  ],
  authors: [{ name: "Luxe Beauty Studio" }],
  openGraph: {
    title: "Luxe Beauty Studio | Premium Salon & Nail Artistry, C-Scheme, Jaipur",
    description: "Welcome to Jaipur's premier sanctuary for couture hair designs, elite nail artistry, and deeply restorative body spa therapies. Read our 379+ Google reviews and experience excellence.",
    url: "https://luxebeautystudio.com",
    siteName: "Luxe Beauty Studio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
