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
  const pages = ["home", "about", "modules", "domains"];

  return (
    <>
      <Router>
        <NavBar className="header" pages={pages} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/modules" element={<Mods />} />
          <Route path="/domains" element={<Domains />} />
        </Routes>
        <Footer
          logo={process.env.PUBLIC_URL + "/images/logos/logo-text.webp"}
        />
      </Router>
    </>
  );
};

export default App;
