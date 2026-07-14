/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    }
          },
  plugins: [],
}