/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      // have a class of hero-pattern and set picture in image
      backgroundImage: (theme) => ({
        "hero-pattern":
          "linear-gradient(rgb(0 0 0 / 80%), rgb(189 169 176 / 80%)), url('pattern-bg.jpg')",
      }),
    },
  },
  plugins: [],
};
