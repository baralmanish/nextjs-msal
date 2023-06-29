/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.6" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.6", letterSpacing: "-0.001em" }],
        lg: ["1.125rem", { lineHeight: "1.6", letterSpacing: "-0.001em" }],
        xl: ["1.25rem", { lineHeight: "1.6", letterSpacing: "-0.001em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.001em" }],
        "3xl": ["1.875rem", { lineHeight: "1.333", letterSpacing: "-0.001em" }],
        "4xl": ["2.25rem", { lineHeight: "1.277", letterSpacing: "-0.001em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.001em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.001em" }],
        "7xl": ["4.5rem", { lineHeight: "1.2", letterSpacing: "-0.001em" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
