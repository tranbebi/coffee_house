import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";




export const metadata: Metadata = {
  title: "COFFEE",
  description: "store ca phê ngon đến từ Việt Nam",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
