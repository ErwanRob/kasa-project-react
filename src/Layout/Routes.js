import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Lodging from '../pages/Lodging';
import About from '../pages/About';
import NotFound from '../pages/ErrorPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default AppRoutes;
