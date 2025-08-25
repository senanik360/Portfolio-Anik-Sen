import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/back-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anik Sen - Graduate Research Assistant | Portfolio",
  description: "Anik Sen is a Graduate Research Assistant pursuing Master of Computing at Multimedia University, Malaysia. Specializing in Information Security, Machine Learning, and Cryptographic Innovation.",
  keywords: ["Anik Sen", "Research Assistant", "Machine Learning", "Information Security", "Cryptography", "Multimedia University", "Malaysia"],
  authors: [{ name: "Anik Sen" }],
  creator: "Anik Sen",
  openGraph: {
    title: "Anik Sen - Graduate Research Assistant",
    description: "Advancing Information Security through Machine Learning and Cryptographic Innovation",
    url: "https://aniksen.com",
    siteName: "Anik Sen Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anik Sen - Graduate Research Assistant",
    description: "Advancing Information Security through Machine Learning and Cryptographic Innovation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
