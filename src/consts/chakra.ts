import { ThemeConfig } from "@chakra-ui/react";
import { Teko } from "next/font/google";

// Font files can be colocated inside of `pages`

export const textFont = Teko({
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: true,
  display: "swap",
  fallback: ["Teko, sans serif"],
  preload: false,
  style: "normal",
});

//export const textFont = Pixelify_Sans({ subsets: ["latin"] });

export const headingFont = Teko({
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: true,
  display: "swap",
  fallback: ["Teko, sans serif"],
  preload: false,
  style: "normal",
});

export const chakraThemeConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
