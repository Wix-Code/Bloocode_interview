const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      screens: {       // Extra small devices
        sm: "640px",        // Small devices
        md: "768px",        // Medium devices
        lg: "1024px",       // Large devices
        xl: "1280px",       // Extra large
        "2xl": "1536px",    // 2x extra large
        "max-sm": { max: "600px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
      },
    }
  }
};

export default config;
