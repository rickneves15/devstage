import "./globals.css";

import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Dev Stage",
  description: "Dev Stage",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-oxanium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${oxanium.variable}`}>
      <body>{children}</body>
    </html>
  );
}
