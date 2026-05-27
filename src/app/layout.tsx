import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: "Mintu Jewellers | Hallmark Gold & Silver Jewellery in Bathinda",
  description: "Discover exquisite Hallmark Gold and Silver Jewellery at Mintu Jewellers since 1999. Trending designs, trusted quality, and bespoke creations in Bathinda.",
  openGraph: {
    "title": "Mintu Jewellers | Hallmark Gold & Silver Jewellery in Bathinda",
    "description": "Discover exquisite Hallmark Gold and Silver Jewellery at Mintu Jewellers since 1999. Trending designs, trusted quality, and bespoke creations in Bathinda.",
    "url": "https://www.mintujewellers.com",
    "siteName": "Mintu Jewellers",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/silver-aesthetic-wallpaper-with-earrings_23-2149871684.jpg",
        "alt": "Exquisite gold necklace with intricate design"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Mintu Jewellers | Hallmark Gold & Silver Jewellery in Bathinda",
    "description": "Discover exquisite Hallmark Gold and Silver Jewellery at Mintu Jewellers since 1999. Trending designs, trusted quality, and bespoke creations in Bathinda.",
    "images": [
      "http://img.b2bpic.net/free-photo/silver-aesthetic-wallpaper-with-earrings_23-2149871684.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
