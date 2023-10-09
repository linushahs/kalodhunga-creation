import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "18px",
        lg: "50px",
        "2xl": "91px",
      },
    },
    extend: {
      colors: {
        purple: "#A566F6",
        green: "#AEF666",
        background: "#0E0E0E",
        black: "#000",
        light: "#8C8C8C",
      },
    },
  },
  plugins: [],
};
export default config;
