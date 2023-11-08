import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1720px",
        "4xl": "1920px",
      },
      colors: {
        purple: "#A566F6",
        green: "#AEF666",
        white: "#EFEFEF",
        background: "#0E0E0E",
        black: "#000",
        light: "#8C8C8C",
        "text-input": "#EEEEEE",
        "submit-btn": "#F8D1B4",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
export default config;
