import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Network | Career Path Quiz",
  description:
    "Discover careers that match your skills and personality and receive personalised advice to guide your next steps.",
  icons: {
    icon: "https://dssqrheg7wcqy.cloudfront.net/static/img/favicons/favicon.94df52a8f9c0.ico",
    apple:
      "https://dssqrheg7wcqy.cloudfront.net/static/img/favicons/apple-touch-icon.d69bcb055479.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
