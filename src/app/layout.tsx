import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anand Cafe Demo | Premium Café Website Template",
  description:
    "A beautifully designed café website demo showcasing modern web design for cafés and restaurants in Anand, Gujarat. This is a demonstration project with fictional sample content.",
  keywords: ["cafe", "restaurant", "Anand", "Gujarat", "demo", "website template"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
