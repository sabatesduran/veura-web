import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veura — Turn voice notes into clean text",
  description:
    "Veura turns recordings and voice notes into plain text you can copy and send. Action Button ready. Works on iPhone and iPad.",
  metadataBase: new URL("https://veura.app"),
  openGraph: {
    title: "Veura",
    description:
      "Turn voice notes into clean text — instantly. Action Button ready. Works on iPhone and iPad.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veura",
    description:
      "Turn voice notes into clean text — instantly. Action Button ready. Works on iPhone and iPad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
