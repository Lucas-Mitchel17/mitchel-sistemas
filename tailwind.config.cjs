/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#43ea80",
        "light-green": "#38f8d4",
        "dark-blue": "#080c1c",
      },
    },
  },
  plugins: [],
};
