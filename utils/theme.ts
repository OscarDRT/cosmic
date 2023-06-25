import { makeTheme } from "dripsy";

export const theme = makeTheme({
  colors: {
    $text: "#ffffff",
    $background: "#000000",
    $primary: "tomato",
    $transparent: "transparent",
  },
  space: {
    $0: 0,
    $4: 4,
    $8: 8,
    $16: 16,
    $32: 32,
    $64: 64,
    $128: 128,
    $256: 256,
  },
  fontSizes: {
    $12: 12,
    $14: 14,
    $16: 16,
    $18: 18,
    $24: 24,
    $28: 28,
    $32: 32,
  },
  text: {
    title: {
      fontSize: "$24",
      fontWeight: "bold",
      color: "$text",
    },
    h1: {
      fontSize: "$16", // 16px, from `fontSizes` above
    },
    p: {
      fontSize: "$12", // 12px from `fontSizes`
      mb: "$16", // 16px from `space`
    },
  },
  borders: {
    $4: 4,
    $8: 8,
    $16: 16,
    $32: 32,
  },
});

type MyTheme = typeof theme;

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
