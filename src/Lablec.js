import React from 'react';
import './App.css';  

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>&copy; A 2025-ös törvény, amely a személyek jogait védi, megtiltja a névvel, képekkel való visszaélést, valamint a jogtalan másolást és terjesztést, biztosítva a személyes adatok és szellemi tulajdon védelmét.</p>
        
        </div>
        <div className="footer-column">
          <h4>Elérhetőségeink</h4>
          <p>Email: best.albigo@gmail.com<br />Telefon: ***********</p>
          
        </div>
        <div className="footer-column">
          <h4>Rólunk</h4>
          <p>Ez az oldal azért jött létre, hogy élvezetesebbé és felhasználóbarátabbá tegyük az albérlet keresés és kiadását.</p>
          <p>Az oldal létrehozói: <br />
          Taskó Enikő, Csarni Lőrinc és Krizsán Márk Gábor</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
