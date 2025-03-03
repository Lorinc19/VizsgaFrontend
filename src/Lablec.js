import React from 'react';
import './App.css';  

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>&copy; 2025 Minden jog fenntartva.</p>
          <a href="https://adatjog.hu/adatvedelmi-tajekoztato" target="_blank">Adatvédelmi nyilatkozat</a>

        </div>
        <div className="footer-column">
          <h4>Elérhetőségünk:</h4>
          <p>Email: best.albigo@gmail.com<br />Kizásólag Email üzenetek fogadunk</p>
        </div>
        <div className="footer-column">
          <h4>Oldal készítői:</h4>
          <p>Taskó Enikő</p>
          <p>Csarni Lőrinc</p>
          <p>Krizsán Márk Gábor</p>
        </div>
      </div>
    </div >
  );
}

export default Footer;
