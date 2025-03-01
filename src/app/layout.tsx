import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/noto-serif";

export const metadata: Metadata = {
  title: "Mika",
  description:
    "A streamlined Discord music bot designed for those who value simplicity and reliability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-noto">{children}</body>
    </html>
  );
}
