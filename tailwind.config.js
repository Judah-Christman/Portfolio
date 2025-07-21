// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // "./app/projects/web-apps/quiz-app/page.jsx",
//     "./app/**/*.{jsx, tsx, js, ts}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "app/page.tsx",
//     "app/projects/*.{js,ts,jsx,tsx}",
//     "app/admin/AdminClient.tsx"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

