import { createTheme } from "@/components/ui/theme"

export const spendSenseTheme = createTheme({
  extend: "dark",
  className: "spend-sense-theme",
  base: {
    background: "hsl(240 10% 4%)",
    foreground: "hsl(0 0% 98%)",
  },
  colors: {
    primary: {
      DEFAULT: "hsl(252 100% 68%)",
      foreground: "hsl(0 0% 100%)",
    },
    secondary: {
      DEFAULT: "hsl(270 100% 70%)",
      foreground: "hsl(0 0% 100%)",
    },
    muted: {
      DEFAULT: "hsl(240 5% 25%)",
      foreground: "hsl(240 5% 65%)",
    },
    accent: {
      DEFAULT: "hsl(300 100% 50%)",
      foreground: "hsl(0 0% 100%)",
    },
  },
  elements: {
    sidebar: {
      background: "hsl(240 10% 8%)",
      foreground: "hsl(0 0% 98%)",
      muted: "hsl(240 5% 25%)",
      accent: "hsl(252 100% 68%)",
    },
  },
})
