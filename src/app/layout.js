import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MindReaderBio - Bridging Science and Markets in Biotechnology",
  description: "Biotech intelligence platform providing scientifically credible insights through cutting-edge analytics and market research for investors and industry professionals.",
  keywords: "biotech, biotechnology, market analysis, FDA clinical developments, biotech insights, scientific research",
  authors: [{ name: "MindReader Enterprises" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "MindReaderBio - Biotech Intelligence Platform",
    description: "Bridging Science and Markets in Biotechnology",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black bg-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
