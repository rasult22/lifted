const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "app-blue": "#076EFF",
      },
      screens: {
        lg: { min: "1000px", max: '4000px' },
        md: { max: "1000px", min: "700px" },
        sm: { max: "700px", min: "0px" },
      },
    },
  },
  plugins: [require("tailwindcss-fluid-type")],
};
