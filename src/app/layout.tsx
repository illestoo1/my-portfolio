import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Modupe Ephraim Ohinoyi — Frontend Developer",
  description: "Frontend Developer specialising in React, Next.js & TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-white text-gray-900 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
