import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3rdBridge",
  description: "The economic layer for autonomous agents.",
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