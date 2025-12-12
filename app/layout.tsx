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
  title: "HintTech - Software Agency | Web Development, Mobile Apps & Digital Solutions",
  description: "Transform your ideas into digital reality. HintTech is a cutting-edge software agency specializing in web development, mobile apps, UI/UX design, and innovative digital solutions that drive business growth.",
  keywords: [
    "software agency",
    "web development",
    "mobile app development",
    "UI/UX design",
    "digital solutions",
    "custom software",
    "React development",
    "Next.js",
    "agile development",
    "cloud solutions",
  ],
  authors: [{ name: "HintTech" }],
  creator: "HintTech",
  publisher: "HintTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hintechit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HintTech - Software Agency | Web Development & Digital Solutions",
    description: "Transform your ideas into digital reality. Professional web development, mobile apps, and innovative digital solutions.",
    url: "https://hintechit.com",
    siteName: "HintTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HintTech - Software Agency",
    description: "Transform your ideas into digital reality. Professional web development and digital solutions.",
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
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
