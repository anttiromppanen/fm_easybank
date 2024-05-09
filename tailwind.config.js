/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      colors: {
        userDarkBlue: "hsl(233, 26%, 24%)",
        userLimeGreen: "hsl(136, 65%, 51%)",
        userBrightCyan: "hsl(192, 70%, 51%)",
        userGrayishBlue: "hsl(233, 8%, 62%)",
        userLightGrayishBlue: "hsl(220, 16%, 96%)",
        userVeryLightGray: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        userBgIntroMobile: "url('/bg-intro-mobile.svg')",
        userBgIntroDesktop: "url('/bg-intro-desktop.svg')",
        userHeaderMobileImgBg: "url('/image-mockups.png')",
      },
    },
  },
  plugins: [],
};
