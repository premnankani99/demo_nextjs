import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIT Beauty Studio | Premium Salon & Nail Artistry, Raja Park, Jaipur",
  description: "Experience absolute beauty at SIT Beauty Studio, Jaipur's premier 4.8★ rated salon in Raja Park. Specializing in flawless gel nail extensions, couture haircuts, rejuvenating spa pedicures, and stress-relief therapies. Request your premium booking today.",
  keywords: [
    "SIT Beauty Studio",
    "सित ब्यूटी स्टूडियो",
    "salon in Raja Park Jaipur",
    "best nail extensions Jaipur",
    "Nandini nail extensions",
    "Ajay haircut stylist Jaipur",
    "luxury pedicure Raja Park",
    "Jaipur beauty parlour reviews",
    "SIT salon Jaipur"
  ],
  authors: [{ name: "SIT Beauty Studio" }],
  openGraph: {
    title: "SIT Beauty Studio | Premium Salon & Nail Artistry, Raja Park, Jaipur",
    description: "Welcome to Jaipur’s premier sanctuary for couture hair designs, elite nail artistry, and deeply restorative body spa therapies. Read our 379+ Google reviews and experience excellence.",
    url: "https://sitbeautystudio.com",
    siteName: "SIT Beauty Studio",
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
      <body>{children}</body>
    </html>
  );
}
