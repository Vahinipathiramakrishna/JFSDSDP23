import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import Recommendations from './pages/Recommendations';
import Diet from './pages/Diet';
import Nutrient from './pages/Nutrient';
import AboutUs from './pages/AboutUs';
import Health from './pages/Health';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recom" element={<Recommendations />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/nutrient" element={<Nutrient />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
