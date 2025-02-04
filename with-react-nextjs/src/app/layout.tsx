import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Para Modal Starter | Next.js",
  description: "A starter template for using the Para Modal with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
