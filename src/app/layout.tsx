import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Veterans Thrive Foundation | Empowering Veteran Families",
    template: "%s | Veterans Thrive Foundation",
  },
  description:
    "Veterans Thrive Foundation empowers veteran families to thrive through economic opportunity, youth enrichment, and community connection. Based in Las Vegas, Nevada.",
  keywords: [
    "veteran nonprofit Las Vegas",
    "military family programs Nevada",
    "veteran business directory",
    "kids programs military families",
    "veteran support",
    "military children programs",
  ],
  authors: [{ name: "Veterans Thrive Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Veterans Thrive Foundation",
    title: "Veterans Thrive Foundation | Empowering Veteran Families",
    description:
      "Empowering veteran families to thrive through economic opportunity, youth enrichment, and community connection.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veterans Thrive Foundation",
    description:
      "Empowering veteran families to thrive through economic opportunity, youth enrichment, and community connection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
