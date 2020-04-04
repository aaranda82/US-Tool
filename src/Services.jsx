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
            <li>3 axis CNC Mill</li>
            <li>5 axis CNC Mill</li>
            <li>Lathe</li>
            <li>Metal Stamping</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
