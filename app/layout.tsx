import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/features/Header";
import Footer from "@/src/features/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://jaxe-tech.vercel.app/'),
  title: "JAXE TECH",
  description:
    "JAXE TECH - Votre partenaire pour des solutions digitales innovantes et performantes.",
  keywords: "JAXE TECH, agence digitale, création de sites web, développement d'applications, transformation digitale, Togo, Afrique",
  openGraph: {
    title: "JAXE TECH",
    description: "Votre partenaire pour des solutions digitales innovantes et performantes.",
    url: `https://jaxe-tech.vercel.app/`,
    siteName: "JAXE TECH",
    images: [
      {
        url: "/images/opg.png",
        width: 1200,
        height: 630,
        alt: "JAXE TECH",
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`font-clashdisplay`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
