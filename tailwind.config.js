/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: { sm: "480px", md: "768px", lg: "976px", xl: "1334px" },
      colors: {
        foreground: "hsl(0 0% 100%)",
        primary: "hsl(0 0% 9%)",
        "primary-foreground": "hsl(0 0% 98%)",
        secondary: "hsl(0 0% 96.1%)",
        "secondary-foreground": "hsl(0 0% 9%)",
        muted: "hsl(0 0% 96.1%)",
        "muted-foreground": "hsl(0 0% 45.1%)",
        accent: "hsl(0 0% 96.1%)",
        "accent-foreground": "hsl(0 0% 9%)",
        border: "hsl(0 0% 89.8%)",
        input: "hsl(0 0% 89.8%)",
        ring: "hsl(0 0% 3.9%)",
      }
    },
    plugins: [],
  }
}
