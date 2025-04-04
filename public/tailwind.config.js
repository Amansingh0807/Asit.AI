/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#1D4ED8", // Default primary color
            light: "#3B82F6",  // Lighter shade
            dark: "#1E40AF",   // Darker shade
          },
          secondary: {
            DEFAULT: "#FFFF00", // Default secondary color
            light: "#FBBF24",   // Lighter shade
            dark: "#B45309",    // Darker shade
          },
          destructive: {
            DEFAULT: "#DC2626", // Default destructive color
            light: "#EF4444",   // Lighter shade
            dark: "#991B1B",    // Darker shade
          },
          background: "#F3F4F6", // Background color
          accent: "#10B981",     // Accent color
          "accent-foreground": "#FFFFFF", // Accent foreground color
        },
      },
    },
    plugins: [],
  };