import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Young Volunteer Examiners Club",
  description: "Young Volunteer Examiners Club official website",
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
