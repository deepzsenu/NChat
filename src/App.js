// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Products from './Products';
import Resources from './Resources';
import AboutUs from './AboutUs';
import BookADemo from './BookADemo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
      </Routes>
    </Router>
  );
};

export default App;


