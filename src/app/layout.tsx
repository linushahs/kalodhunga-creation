import type { Metadata } from "next";
import "./globals.css";
import "./locomotive-scroll.css";

// const SFPro = localFont({
//   src: [
//     {
//       path: "@/fonts/SFPRODISPLAYREGULAR.OTF",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "@/fonts/SFPRODISPLAYLIGHTITALIC.OTF",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "@/fonts/SFPRODISPLAYBOLD.OTF",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "@/fonts/SFPRODISPLAYHEAVYITALIC.OTF",
//       weight: "700",
//       style: "italic",
//     },
//   ],
// });

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
      <body>{children}</body>
    </html>
  );
}
