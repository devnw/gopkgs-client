import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';

// import pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Mods from './pages/Mods/Mods';
import Domains from './pages/Domains/Domains';

// import components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.pages = ['home', 'about', 'modules', 'domains'];
  }

  render() {
    return (
      <>
        <NavBar pages={this.pages} />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/modules" element={<Mods />} />
            <Route path="/domains" element={<Domains />} />
          </Routes>
        </Router>
        <Footer logo={process.env.PUBLIC_URL + "/images/logos/logo-text.webp"} />
      </>
    );
  }
}
