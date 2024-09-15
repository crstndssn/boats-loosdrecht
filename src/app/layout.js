import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lekkervarenloosdrecht",
  description: "Beleef de prachtige Loosdrechtse Plassen vanaf het water vanuit het comfort van onze luxe boten voor maximaal 12 personen. Altijd met een privé kapitein. Onze boten zijn ideaal voor bedrijfsuitjes, verjaardagen, speciale jubilea of gewoon voor een heerlijk dagje op het water met vrienden of familie. Wij hebben de perfecte vaart voor u",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
