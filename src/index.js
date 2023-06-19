import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./index.css";
import App from "./App";

const Theme = createTheme({
   typography: {
      fontFamily: "Inter",
      button: {
         textTransform: "none",
      },
   },

   palette: {
      primary: {
         main: "#53575A",
         light: "#F1F1F9",
         dark: "#2D2C3F",
         contrastText: "#4D4D4D",
      },
      secondary: {
         main: "#D0D4D9",
         dark: "#808495",
         contrastText: "#838296",
      },
      success: {
         main: "#61BD63",
      },
      info: {
         main: "#FFBF3C",
      },
      background: {
         default: "#D0D4D9",
         light: "#E8E9EC",
      },
   },
   breakpoints: {
      values: {
         tablet: 768,
         laptop: 1440,
         desktop: 1620,
         largeScreen: 2560,
      },
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: ({ ownerState, theme }) => ({
               ...(ownerState.variant === "contained" &&
                  ownerState.color === "primary" && {
                     backgroundColor: theme.palette.primary,
                     color: theme.palette.other.white,
                     fontWeight: 400,
                     fontSize: "16px",
                     lineHeight: "19px",
                     fontStyle: "normal",
                     fontFamily: "Inter",
                  }),
            }),
         },
      },
   },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
   </ThemeProvider>
);
