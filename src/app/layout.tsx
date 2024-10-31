import { NextHead } from "@/components/NextHead";
import { textFont } from "@/consts/chakra";
import { Providers } from "@/app/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pepz.io"),
  title: { default: "PEPEZ Defi App", template: "%s | PEPZ" },
  description:
    "PEPEZ Official Site for @pepemainnetz Follow our twitter @pepemainnetz! Our New cross chain NFTZ have just launched! Grab one now from the site!",
  twitter: {
    card: "summary_large_image",
    creator: "@pepemainnetz",
    site: "@pepemainnetz",
    creatorId: "@pepemainnetz",
    title: "Pepez",
    images: [
      {
        url: "/logo.png",
        alt: "@pepemainnetz",
        username: "@pepemainnetz",
        height: 500,
        width: 500,
        secureUrl: "https://pepz.io/logo.png",
      },
    ],
    description:
      "PEPEZ Official Site for @pepemainnetz Follow our twitter @pepemainnetz! Our New cross chain NFTZ have just launched! Grab one now from the site!",
    siteId: "@pepemainnetz",
  },
  appleWebApp: {
    capable: true,
    title: "Pepe Mainnetz",
    statusBarStyle: "black-translucent",
    startupImage: {
      url: "https://pepz.io/logo.png",
      media:
        "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
    },
  },
  applicationName: "PEPEZ Defi App",
  category: "Finance",
  appLinks: {
    ios: {
      url: "https://pepz.io",
      app_name: "Pepez Defi App",
      app_store_id: "",
    },
    android: {
      package: "com.pepz.io",
      url: "https://pepz.app",
      app_name: "Pepez Defi App",
    },
    ipad: {
      url: "https://pepz.io",
      app_name: "Pepez Defi App",
      app_store_id: "",
    },
    iphone: {
      url: "https://pepz.io",
      app_name: "Pepez Defi App",
      app_store_id: "",
    },
    web: {
      url: "https://pepz.io",
      should_fallback: true,
    },
    windows: {
      url: "https://pepz.io",
      app_name: "Pepez Defi App",
      app_id: "",
    },
    windows_phone: {
      url: "https://pepz.io",
      app_name: "Pepez Defi App",
      app_id: "",
    },
    windows_universal: {
      url: "https://pepz.io",
      app_name: "Pepez Defi App",
      app_id: "",
    },
  },
  bookmarks: "https://pepz.io/bookmarks",
  assets: "https://pepz.io/assets",
  authors: [{ name: "Pepez Team", url: "https://pepz.io" }],
  generator: "Next.js",
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
    url: "https://pepz.io",
    title: "Pepez Defi App",
    description:
      "PEPEZ Official Site for @pepemainnetz Follow our twitter @pepemainnetz! Our New cross chain NFTZ have just launched! Grab one now from the site!",
    siteName: "Pepez",
    images: [
      {
        url: "https://pepz.io/logo.png",
        alt: "@pepemainnetz",
        username: "@pepemainnetz",
        height: 500,
        width: 500,
        secureUrl: "https://pepz.io/logo.png",
        type: "image/png",
      },
    ],
  },
  creator: "Pepez Team",
  icons: [
    { rel: "icon", url: "https://pepz.io/icon.png" },
    { rel: "apple-touch-icon", url: "https://pepz.io/apple-icon.png" },
    { rel: "manifest", url: "https://pepz.io/manifest.json" },
    { rel: "mask-icon", url: "https://pepz.io/mask-icon.svg" },
    { rel: "shortcut icon", url: "https://pepz.io/favicon.ico" },
  ],
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
