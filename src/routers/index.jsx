import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import Contact from '../pages/contact';
import Home from '../pages/home';
import { Staff, Digital, Development } from '../pages/services';

const Routes = () => {
  return (
    <Router>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/services/staff" element={<Staff />} />
        <Route exact path="/services/development" element={<Development />} />
        <Route exact path="/services/digital" element={<Digital />} />
        <Route exact path="/contact" element={<Contact />} />
    </Router>
  )
}

export default Routes;