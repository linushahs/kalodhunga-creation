import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: ["200", "300", "400"] });

export const metadata: Metadata = {
  title: "Kalodhunga Creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
