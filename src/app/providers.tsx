"use client";

import { chakraThemeConfig, headingFont, textFont } from "@/consts/chakra";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ToastImage } from "../components/ToastImage";

const chakraTheme = extendTheme({
  config: chakraThemeConfig,
  fonts: {
    body: textFont.style.fontFamily,
    heading: headingFont.style.fontFamily,
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={chakraTheme}
      toastOptions={{
        defaultOptions: {
          duration: 9000,
          position: "bottom-left",
          containerStyle: {
            fontFamily: textFont?.style?.fontFamily,
            maxW: "250px",
          },
          isClosable: true,
          icon: <ToastImage />,
        },
      }}
    >
      {children}
    </ChakraProvider>
  );
}
