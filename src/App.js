import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

// import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Mods from "./pages/Mods/Mods";
import Domains from "./pages/Domains/Domains";

// import components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  const pages = [
    {
      path: "/",
      title: "Home",
      component: Home,
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

  return (
    <>
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
        <Footer
          logo={process.env.PUBLIC_URL + "/images/logos/logo-text.webp"}
        />
      </Router>
    </>
  );
};

export default App;
