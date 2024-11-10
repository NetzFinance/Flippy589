import { NextHead } from "@/components/NextHead";
import { textFont } from "@/consts/chakra";
import { Providers } from "@/app/providers";
import type { Metadata } from "next";
import '../styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flippytheswitch.com"),
  title: { default: "Flippy dApp", template: "%s | FLIPPY" },
  description:
    "",
  twitter: {
    card: "summary_large_image",
    creator: "@flippy589",
    site: "@flippy589",
    creatorId: "@flippy589",
    title: "Flippy The Switch",
    images: [
      {
        url: "/logo.png",
        alt: "@flippy589",
        username: "@flippy589",
        height: 500,
        width: 500,
        secureUrl: "https://flippytheswitch.com/logo.png",
      },
    ],
    description:
      "",
    siteId: "@flippy589",
  },
 
  applicationName: "Flippy dApp",
  category: "Finance",
  keywords: [
    "steakhouse",
    "defi",
    "app",
    "crypto",
    "cryptocurrency",
    "blockchain",
    "ethereum",
    "polygon",
    "cronos",
    "matic",
    "avax",
    "bsc",
    "binance",
    "smartchain",
    "solana",
    "sol",
    "terra",
    "luna",
    "ftm",
    "fantom",
    "heco",
    "harmony",
    "one",
    "celo",
    "celo",
    "near",
    "tezos",
    "xtz",
    "algorand",
    "algo",
    "avalanche",
    "avax",
    "polkadot",
    "dot",
    "kusama",
    "ksm",
    "cro",
    "crypto.com",
    "chainlink",
    "link",
    "uniswap",
    "uni",
    "sushiswap",
    "sushi",
    "pancakeswap",
    "cake",
    "quickswap",
    "quick",
    "1inch",
    "aave",
    "compound",
    "maker",
    "curve",
    "yearn",
  ],

  openGraph: {
    type: "website",
    url: "https://www.flippytheswitch.com",
    title: "Flippy dApp",
    description:
      "",
    siteName: "Flippy The Switch",
    images: [
      {
        url: "https://flippytheswitch.com/logo.png",
        alt: "@flippy589",
        username: "@flippy589",
        height: 500,
        width: 500,
        secureUrl: "https://flippytheswitch.com/logo.png",
        type: "image/png",
      },
    ],
  },
  creator: "Flippy Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextHead />
      <body style={{ fontFamily: textFont.style.fontFamily }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
