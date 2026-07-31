import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yvec.org"),
  title: "Young Volunteer Examiners Club",
  description:
    "Young Volunteer Examiners Club is a 501(c)(4) unincorporated nonprofit organization advocating to repeal the Volunteer Examiner minimum age requirement and help advance amateur radio.",
  openGraph: {
    type: "website",
    url: "https://yvec.org",
    title: "Young Volunteer Examiners Club",
    description:
      "Young Volunteer Examiners Club is a 501(c)(4) unincorporated nonprofit organization advocating to repeal the Volunteer Examiner minimum age requirement and help advance amateur radio.",
    siteName: "Young Volunteer Examiners Club",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "Young Volunteer Examiners Club logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Volunteer Examiners Club",
    description:
      "Young Volunteer Examiners Club is a 501(c)(4) unincorporated nonprofit organization advocating to repeal the Volunteer Examiner minimum age requirement and help advance amateur radio.",
    images: ["/images/logo.png"],
  },
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
