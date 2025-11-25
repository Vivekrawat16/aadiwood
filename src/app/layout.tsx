import type { Metadata } from "next";
import { Fauna_One, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import StructuredData from "@/components/StructuredData";
import CustomCursor from "@/components/ui/CustomCursor";

const faunaOne = Fauna_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fauna-one",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Aadiwood Production | Voice of Adivasi Culture",
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
    title: "Aadiwood Production | Voice of Adivasi Culture",
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
    title: "Aadiwood Production | Voice of Adivasi Culture",
    description: "The premier production house of Nimar, showcasing the rich heritage of Bhil and Barela tribes through modern media.",
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
        className={`${faunaOne.variable} ${dmSans.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <StructuredData />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}
