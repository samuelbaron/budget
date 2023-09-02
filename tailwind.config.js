module.exports = {
  content: ["./src/**/*.vue", "./src/**/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        default: "#272727",
        inactive: "#a3a4a4",
        background: "##fffffb",
        base: "#24272B",
        primary: "#f20052",
        secondary: "#0849b9",
      },
      fontFamily: {
        "custom-font": ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
