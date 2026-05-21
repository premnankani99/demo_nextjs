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
  title: "Luxe Beauty Studio | Premium Salon & Nail Artistry, Downtown Metro",
  description: "Experience absolute beauty at Luxe Beauty Studio, Metropolis's premier 4.8ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¦ rated salon in Downtown Metro. Specializing in flawless gel nail extensions, couture haircuts, rejuvenating spa pedicures, and stress-relief therapies. Request your premium booking today.",
  keywords: [
    "Luxe Beauty Studio",
    "Luxe Beauty Studio",
    "à¤²à¤•à¥à¤¸ à¤¬à¥à¤¯à¥‚à¤Ÿà¥€ à¤¸à¥à¤Ÿà¥‚à¤¡à¤¿à¤¯à¥‹",
    "salon in Downtown Metro Metropolis",
    "best nail extensions Metropolis",
    "Sophia nail extensions",
    "Alex haircut stylist Metropolis",
    "luxury pedicure Downtown Metro",
    "Metropolis beauty parlour reviews",
    "Luxe salon Metropolis"
  ],
  authors: [{ name: "Luxe Beauty Studio" }],
  openGraph: {
    title: "Luxe Beauty Studio | Premium Salon & Nail Artistry, Downtown Metro",
    description: "Welcome to MetropolisÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s premier sanctuary for couture hair designs, elite nail artistry, and deeply restorative body spa therapies. Read our 379+ Google reviews and experience excellence.",
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
      <body>{children}</body>
    </html>
  );
}
