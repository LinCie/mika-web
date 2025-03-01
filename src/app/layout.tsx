import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/roboto";

import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-roboto text-foreground bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
