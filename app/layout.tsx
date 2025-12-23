import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O Sétimo Selo",
  description: "Uma jornada misteriosa rumo à verdade oculta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cinzel.variable} bg-black text-gold font-cinzel antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
