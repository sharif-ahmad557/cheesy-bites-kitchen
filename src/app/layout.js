import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cheesy Bites Kitchen",
  description: "A modern Next.js and Tailwind CSS Restaurant application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
        suppressHydrationWarning={true}
      >
        <Toaster position="top-center" />

        <NextTopLoader color="#b45309" height={4} showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
