/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1440px"
      },
      screens:{
        xs : "320px",
        sm : "375",
        sml : "500px",
        md : "667px",
        mdl : "768px",
        lg : "960px",
        lgl : "1024px ",
        xl : "1200px "
      },
      fontFamily:{
        titleFont : "Roboto",
        bodyFont : "Poppins"
      }
    },
  },
  plugins: [],
}