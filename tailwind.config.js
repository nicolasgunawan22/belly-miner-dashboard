module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-sm': '320px',
        'mobile-md': '480px',
      },
    },
    plugins: [],
    important: true,
  }
}