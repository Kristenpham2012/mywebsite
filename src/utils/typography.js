import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Dancing Script", "serif"],
  bodyFontFamily: ["Dosis", "serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
