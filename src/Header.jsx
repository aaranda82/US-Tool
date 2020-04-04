import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="title">
        <div className="logo"></div>
        <div className="name">US Tool & Die</div>
      </div>
      <div className="contact">
        <div>
          <i className="fas fa-envelope-open-text"></i>
          <a href="mailto:info@ustooldie.com">info@ustooldie.com</a>
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <a href="tel:19494549858">(949) 454 - 9858</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
