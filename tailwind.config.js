/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/projects/web-apps/quiz-app/page.jsx",
    "./app/**/*.{jsx, tsx, js, ts}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "app/page.tsx",
    "./app/devices/components.tsx",
    "./app/fishing/page.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

