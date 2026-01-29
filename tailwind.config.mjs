// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".cp": {
          cursor: "pointer",
        },
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".column": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      });
    },
  ],
};
