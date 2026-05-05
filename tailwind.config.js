
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F59E0B",
        dark: "#0F172A",
        secondary: "#1E293B",
        gray: "#64748B",
        light: "#F1F5F9",
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};