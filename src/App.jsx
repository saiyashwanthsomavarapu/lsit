import React from 'react';
import { NavBar, Footer } from './components';
import * as APPCONTANTS from './appconstants';
import './App.css';
import Routes from './routers';

function App() {
  return (
    <div  >
      <NavBar navMenu={APPCONTANTS.navMenu}/>
      
      <Routes />
      {/* <Button variant='contained'>click</Button> */}
      <Footer />
    </div>
  );
}

export default App;
