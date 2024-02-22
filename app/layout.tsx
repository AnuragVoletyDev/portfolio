import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SFPro, LeagueSpartan } from "./Fonts";

export const metadata: Metadata = {
  title: "Anurag Volety",
  description: "Simple iPhone styled contact card of Anurag Volety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${SFPro.variable}  ${LeagueSpartan.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
