import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Services from './Services';

function App() {
  return (
    <>
      <div className="top">
        <Header />
        {/* <Nav /> */}
      </div>
      <div className="body">
        <About />
        <Services />
      </div>
    </>
  );
}

export default App;
