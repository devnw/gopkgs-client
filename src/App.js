import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

// import components
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
