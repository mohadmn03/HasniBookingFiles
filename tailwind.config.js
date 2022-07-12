/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '1rem',
  
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1180px',
          '2xl': '1496px',
        },
      },
      colors: {
        bg: {
          DEFAULT: "#f8f9ff",
          card: "#f1f3fa",
          cardHover: "hsl(225, 100%, 98%)",
          dark: "hsl(230, 17%, 14%)",
          darkCard: "hsl(228, 28%, 20%)",
          hoverCard:" hsl(232, 19%, 15%)",
          textMain: "hsl(0, 0%, 100%)",
          textSecondary: "hsl(228, 34%, 66%)",
        },
        txt: {
          followersToday: "#1db489",
          rd: "#dc414c",
          green: "#00FF0F",
        },
      }
    },
  },
  plugins: [],
}
