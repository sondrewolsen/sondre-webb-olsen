import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F4EF",
        card: "#FFFFFF",
        ink: "#201C18",
        inksoft: "#5B534B",
        brown: "#6E5342",
        brownsoft: "#EFE6DD",
        blue: "#6E93A6",
        bluesoft: "#E4EDF0",
        line: "#E2DCD3",
        mono: "#8A7F73",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
