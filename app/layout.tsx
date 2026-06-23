import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Inria_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddhesh Ghag | Portfolio",
  description: "Full-Stack Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${inriaSans.variable} ${jetbrainsMono.variable} antialiased bg-[#FFFFFF]`}
    >
      <body className="min-h-screen text-[#000000] font-sans selection:bg-[#0161EA] selection:text-white">
        {children}
      </body>
    </html>
  );
}
