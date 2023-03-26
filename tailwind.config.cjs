/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#30dd67",

          secondary: "#941bc4",

          accent: "#69c0e0",

          neutral: "#1A2329",

          "base-100": "#F7F2F7",

          info: "#75ADF5",

          success: "#6CDAAB",

          warning: "#A46B0E",

          error: "#FB4741",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
