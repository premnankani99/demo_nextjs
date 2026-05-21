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
  title: "Luxe Beauty Studio | Premium Salon & Nail Artistry, Lajpat Nagar, Delhi",
  description: "Experience absolute beauty at Luxe Beauty Studio, New Delhi's premier salon in Lajpat Nagar, Delhi. Specializing in flawless gel nail extensions, couture haircuts, rejuvenating spa pedicures, and stress-relief therapies. Request your premium booking today.",
  keywords: [
    "Luxe Beauty Studio",
    "Luxe Beauty Studio",
    "ÃƒÂ Ã‚Â¤Ã‚Â²ÃƒÂ Ã‚Â¤Ã¢â‚¬Â¢ÃƒÂ Ã‚Â¥Ã‚ÂÃƒÂ Ã‚Â¤Ã‚Â¸ ÃƒÂ Ã‚Â¤Ã‚Â¬ÃƒÂ Ã‚Â¥Ã‚ÂÃƒÂ Ã‚Â¤Ã‚Â¯ÃƒÂ Ã‚Â¥Ã¢â‚¬Å¡ÃƒÂ Ã‚Â¤Ã…Â¸ÃƒÂ Ã‚Â¥Ã¢â€šÂ¬ ÃƒÂ Ã‚Â¤Ã‚Â¸ÃƒÂ Ã‚Â¥Ã‚ÂÃƒÂ Ã‚Â¤Ã…Â¸ÃƒÂ Ã‚Â¥Ã¢â‚¬Å¡ÃƒÂ Ã‚Â¤Ã‚Â¡ÃƒÂ Ã‚Â¤Ã‚Â¿ÃƒÂ Ã‚Â¤Ã‚Â¯ÃƒÂ Ã‚Â¥Ã¢â‚¬Â¹",
    "salon in Lajpat Nagar, Delhi New Delhi",
    "best nail extensions New Delhi",
    "Sophia nail extensions",
    "Alex haircut stylist New Delhi",
    "luxury pedicure Lajpat Nagar, Delhi",
    "New Delhi beauty parlour reviews",
    "Luxe salon New Delhi"
  ],
  authors: [{ name: "Luxe Beauty Studio" }],
  openGraph: {
    title: "Luxe Beauty Studio | Premium Salon & Nail Artistry, Lajpat Nagar, Delhi",
    description: "Welcome to New DelhiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢s premier sanctuary for couture hair designs, elite nail artistry, and deeply restorative body spa therapies. Read our 379+ Google reviews and experience excellence.",
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
