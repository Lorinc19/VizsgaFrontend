import React from 'react';
import './App.css';  

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>&copy; 2025 Minden jog fenntartva.</p>
          <a href="#">Adatvédelmi Nyilatkozat</a>
        </div>
        <div className="footer-column">
          <h4>Elérhetőségeink</h4>
          <p>Email: info@example.com<br />Telefon: +36 1 234 5678</p>
        </div>
        <div className="footer-column">
          <h4>Rólunk</h4>
          <p>Ez azt oldal bemutatja a legjobb termékeket és szolgáltatásokat.</p>
        </div>
      </div>
    </div >
  );
}

export default Footer;
