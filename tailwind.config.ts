import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ... existing colors
      fontFamily: {
        bodoni: ['var(--font-bodoni)'], // Primary font
        mono: ['var(--font-mono)'],     // Only keep what you need
      },
    },
  },
  plugins: [],
} satisfies Config;