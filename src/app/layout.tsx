import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veura — Turn voice notes into clean text",
  description:
    "Veura turns recordings and voice notes into plain text you can copy and send. Action Button ready. Works on iPhone and iPad.",
  metadataBase: new URL("https://veura.app"),
  icons: {
    icon: [{ url: "/brand/app-icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
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
  const appStoreAppId = process.env.APPLE_APP_ID;
  const appArgument = process.env.APPLE_APP_ARGUMENT ?? "veura://";

  return (
    <html lang="en">
      <head>
        {/* iOS Smart App Banner (Safari) */}
        {appStoreAppId ? (
          <meta
            name="apple-itunes-app"
            content={`app-id=${appStoreAppId}, app-argument=${appArgument}`}
          />
        ) : null}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
