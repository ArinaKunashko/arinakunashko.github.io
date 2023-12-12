/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#0c1326",
    backgroundResume: "#0c1326",
    backgroundAbouteMe: "#0c1326",
    backgroundFooter: "#070f1f",
    mainTitle: "#FFFFFF",
    blockHeader: "#FFFFFF",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#26A69A",
    error: "#ff5722",
    headerButtons: "",
    footerText: "#FFFFFF"
  },
};

const customLightTheme = {
  dark: false,
  colors: {
    background: "#E0E0E0",
    backgroundResume: "#FFFFFF",
    backgroundAbouteMe: "#FFFFFF",
    backgroundFooter: "#bdbdbd",
    mainTitle: "#FFFFFF",
    blockHeader: "#BDBDBD",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#26A69A",
    error: "#ff5722",
    headerButtons: "",
    footerText: "#000000"

  },
};

export default createVuetify({
  theme: {
    defaultTheme: "customLightTheme",
    themes: {
      customDarkTheme,
      customLightTheme,
    },
  },
});