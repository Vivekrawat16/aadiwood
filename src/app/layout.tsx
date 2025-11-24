import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import StructuredData from "@/components/StructuredData";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Aadiwood Production | The Voice of Adivasi Culture",
  description:
    "Official website of Aadiwood Production - The Brand of Nimar. Promoting Adivasi culture through film, music videos, and storytelling. Experience authentic tribal cinematography and cultural preservation.",
  keywords: [
    "Aadiwood Production",
    "Adivasi culture",
    "Adivasi music videos",
    "tribal film production",
    "Nimar brand",
    "cultural cinematography",
    "Adivasi songs",
    "tribal community media",
    "Madhya Pradesh film production",
    "Rohit Vaishaki",
    "Barela culture",
    "indigenous storytelling"
  ].join(", "),
  authors: [{ name: "Aadiwood Production" }],
  creator: "Aadiwood Production",
  publisher: "Aadiwood Production",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aadiwood.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Aadiwood Production | The Voice of Adivasi Culture",
    description: "Promoting Adivasi culture through modern film production and music videos. The Brand of Nimar.",
    url: "https://aadiwood.com",
    siteName: "Aadiwood Production",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aadiwood Production - The Voice of Adivasi Culture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadiwood Production | The Voice of Adivasi Culture",
    description: "Promoting Adivasi culture through modern film production and music videos.",
    images: ["/og-image.jpg"],
    creator: "@aadiwood",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-background text-white font-sans overflow-x-hidden`}
      >
        <Navbar />
        <StructuredData />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}
