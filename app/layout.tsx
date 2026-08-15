import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebari — A place for things to grow",
  description: "Local stories, creative work, recipes, studios and a shared library.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
