import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lazo Toiture & Énergie - Expert Herstal & Liège",
  description: "Spécialiste en toiture, panneaux photovoltaïques et isolation de façade à Herstal et en Province de Liège.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Header />
        <main className="flex-1 min-h-[calc(100vh-4rem-20rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
