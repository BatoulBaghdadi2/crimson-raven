import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Experience from './pages/Experience';
import Pricing from './pages/Pricing';

 function App() {
  return (
    <BrowserRouter>
     
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

     
      <Footer />
    </BrowserRouter>
  );
}export default  App;