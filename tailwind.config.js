module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-left": "slideLeft 0.7s ease-out",
      },
    },
  },
}
