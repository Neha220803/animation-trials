import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComp from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Website animation Trials",
  description:
    "A collection of animation trials and experiments using Next.js and Gsap Animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComp />
        {children}
      </body>
    </html>
  );
}
