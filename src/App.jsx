import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About"
import Home from "./Pages/Home"
import WebDev from './Pages/WebDev';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/webdev" element={<WebDev />} />
    </Routes>
  </Router>
  )
}

export default App
