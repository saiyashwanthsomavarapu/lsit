import React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import AboutUs from '../pages/aboutus';
import Careers from '../pages/careers';
import Contact from '../pages/contact';
import Home from '../pages/home';
import { Staff, Digital, Development } from '../pages/services';
import Technology from '../pages/services/technology';

const Routes = () => {
  return (
    <Router>
        <Route exact path="/" element={<Navigate replace to="/lsit" />} />
        <Route exact path="/lsit" element={<Home  />} />
        <Route exact path="/lsit/about" element={<AboutUs />} />
        <Route exact path="/lsit/services/staff" element={<Staff />} />
        <Route exact path="/lsit/services/technology" element={<Technology />} />
        <Route exact path="/lsit/services/digital" element={<Digital />} />
        <Route exact path="/lsit/careers" element={<Careers />}/>
        <Route exact path="/lsit/contact" element={<Contact />} />
    </Router>
  )
}

export default Routes;