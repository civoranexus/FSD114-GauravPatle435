/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#1E40AF",     // Civora Blue
      secondary: "#20A7DB",   // Accent Blue
      dark: "#0F172A",
      light: "#F8FAFC"
    },
    fontFamily: {
      brand: ["Poppins", "sans-serif"]
    }
  },
},
  plugins: [],
}

