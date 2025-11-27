import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['var(--font-bodoni)'],
        inter: ['var(--font-inter)'],
        // mono: ['var(--font-mono)'],
        mono: ['var(--font-jetbrains-mono)']
        // hacker: ['var(--font-share-tech-mono)']
      },
      colors: {
        // "purple-bright": "#bf40ff",
        "purple-bright": "#11d3fa",
        "cyan-background": "rgba(7, 183, 237, 0.15)"
      },
      opacity: {
        7: '0.07',
      },
    },
  },
  plugins: [],
} satisfies Config;