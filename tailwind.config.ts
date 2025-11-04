import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9B5CFF",
        primaryDark: "#5E17EB",
        bg: "#0D0D0D",
        ink: "#FFFFFF",
        muted: "#B3B3B3",
        night: "#1A1B3A",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #9B5CFF, #5E17EB)",
      },
    },
  },
  plugins: [],
} satisfies Config;
