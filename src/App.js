import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

// import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Mods from "./pages/Mods/Mods";
import Domains from "./pages/Domains/Domains";
import Docs from "./pages/Docs/Docs";

// import components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./App.scss";

const App = (props) => {
  const pages = [
    {
      path: "/",
      title: "Home",
      component: Home,
      exact: true,
    },
    {
      path: "/docs",
      title: "Docs",
      component: Docs,
      exact: true,
    },
    {
      path: "/about",
      title: "About",
      component: About,
      exact: true,
    },
    {
      path: "/mods",
      title: "Mods",
      component: Mods,
      exact: true,
      authenticated: true,
    },
    {
      path: "/domains",
      title: "Domains",
      component: Domains,
      exact: true,
      authenticated: true,
    },
  ];

  const PRIMARY = "#0E2E3F";
  const SECONDARY = "#185A7D";
  const TERTIARY = "#4197CB";
  const DARK = "#2b2b2b";
  const LIGHT = "#687C87";
  const BACK = "#A5B1B7";

  let theme = createTheme({
    palette: {
      primary: {
        main: PRIMARY,
      },
      secondary: {
        main: SECONDARY,
      },
    },
    typography: {
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      h1: {
        fontSize: "2.5rem",
      },
      h2: {
        fontSize: "2rem",
      },
      h3: {
        fontSize: "1.5rem",
      },
      h4: {
        fontSize: "1rem",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: SECONDARY,
          },
          containedSecondary: {
            backgroundColor: TERTIARY,
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            backgroundColor: LIGHT,
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative", minHeight: "calc(100vh - 220px)" }}>
        <Router>
          <NavBar className="header" pages={pages} />
          <Routes>
            {pages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                exact={page.exact}
                element={page.component()}
              />
            ))}
          </Routes>
        </Router>
      </div>
      <Footer
        logo={process.env.PUBLIC_URL + "/images/logos/logo-text.webp"}
      />
    </ThemeProvider>
  );
};

export default App;
