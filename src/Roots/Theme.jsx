import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    h1: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "40px",
      fontWeight: 300,
      lineHeight: "1.167",
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "36px",
      fontWeight: 300,
      lineHeight: "1.2",
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "26px",
      fontWeight: 500,
      lineHeight: "1.137",
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: "1.334",
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "1.6",
      letterSpacing: "0.00075em",
    },
    Title: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "38px",
      fontWeight: 300,
      lineHeight: "1.2",
      letterSpacing: "-0.00833em",
    },
    subtitle1: {
      fontFamily: "Open Sans",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "Open Sans",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Open Sans",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.01017em",
    },
    button: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.75,
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    caption: {
      fontFamily: "Open Sans",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: "Open Sans",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
});
export default theme;
