import React from 'react';

function Services() {
  return (
    <div id="services" className="services">
      <img
        className="servicesImage"
        src="cncMilling_1.png"
        alt="CNC tool cutting"
      />
      <div className="content">
        <div className="contentTitle">Services</div>
        <div className="servicesContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
          placerat in egestas erat imperdiet sed euismod nisi.
          <ul>
            <li>Wire EDM</li>
            <li>CNC Mill</li>
            <li>CNC Lathe</li>
            <li>Metal Stamping</li>
            <li>
              <a href="mailto:info@ustooldie.com">Ask for a quote</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
