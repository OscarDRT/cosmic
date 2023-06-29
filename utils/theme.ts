import { makeTheme } from "dripsy";

export const theme = makeTheme({
  colors: {
    $text: "#ffffff",
    $background: "#000000",
    $primary: "#11DCE8",
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
    subtitle: {
      fontSize: "$18",
      fontWeight: "bold",
      color: "$text",
    },
    body: {
      fontSize: "$16",
      fontWeight: "600",
      color: "$text",
    },
    paragraph: {
      fontSize: "$14",
      color: "$text",
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
