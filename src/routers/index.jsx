import React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import Contact from '../pages/contact';
import Home from '../pages/home';
import { Staff, Digital, Development } from '../pages/services';

const Routes = () => {
  return (
    <Router>
        <Route exact path="/" element={<Navigate replace to="/lsit" />} />
        <Route exact path="/lsit" element={<Home  />} />
        <Route exact path="/lsit/services/staff" element={<Staff />} />
        <Route exact path="/lsit/services/development" element={<Development />} />
        <Route exact path="/lsit/services/digital" element={<Digital />} />
        <Route exact path="/lsit/contact" element={<Contact />} />
    </Router>
  )
}

export default Routes;