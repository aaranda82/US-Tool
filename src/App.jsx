import React from 'react';

function App() {
  return (
    <>
      <header>
        <div>
          <a href="mailto:info@ustooldie.com">info@ustooldie.com</a>
        </div>
        <div>
          <img src="logo_transparent.png" alt="" /> US Tool & Die
        </div>
        <div>
          <a href="tel:19494549858">(949) 454 - 9858</a>
        </div>
      </header>
      <main>
        <div className="about">
          We are a family owned and operated business in Laguna Hills with over
          20 years of machining experience. Our focus is on excellent customer
          service and quality production.
        </div>
        <div className="services">Services</div>
        <div className="servicesList">
          <div>CNC Mills</div>
          <div>CNC Lathes</div>
          <div>Wire EDMs</div>
          <div>Presses</div>
        </div>
        <div className="contact">Contact Us</div>
        <div className="contactInfo">
          <div className="address">
            23274 Del Lago Dr #1308,
            <br />
            Laguna Hills,
            <br />
            CA 92653
          </div>
          <div className="emailPhone">
            <a href="mailto:info@ustooldie.com">info@ustooldie.com</a>
            <br />
            <a href="tel:19494549858">(949) 454 - 9858</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
