/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-void": "#151419",
        "liquid-lava": "#f56e0f",
        "gluon-grey": "#1b1b1e",
        "slate-grey": "#262626",
        "dusty-grey": "#878787",
        "snow-white": "#fbfbfb",
      },
      fontFamily: {
        Azonix: ['"Azonix"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
