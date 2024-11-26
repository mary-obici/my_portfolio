import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#232323",
      },
      secondary: {
        main: "#cb0c6f",
      },
    },
    typography: {
        // fontFamily: '"Helvetica Neue"',
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;