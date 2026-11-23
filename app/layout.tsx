import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clipboard | Teljes digitális lefedettség",
  description: "AI-tanácsadás és fejlesztés, weboldalak, iOS- és Android-appok, hirdetések és analitika egy digitális ügynökségtől.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
