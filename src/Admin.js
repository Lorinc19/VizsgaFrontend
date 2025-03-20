import React, { useState } from 'react';
import './Admin.css'; // CSS fájl importálása

const Admin = () => {
  // Adatok hirdetésekről
  const [hirdetesek, setHirdetesek] = useState([
    {
      hirdetesNev: "Eladó ház",
      elerhetoseg: "123-456-789",
      leiras: "Szép ház, jó helyen",
    },
    {
      hirdetesNev: "Bérlésre kiadó lakás",
      elerhetoseg: "987-654-321",
      leiras: "Csendes környéken, jó közlekedéssel",
    },
  ]);

  // Adatok felhasználókról
  const [felhasznalok, setFelhasznalok] = useState([
    {
      nev: "János",
      felhasznalonev: "janos123",
      elerhetoseg: "janos@mail.com",
    },
    {
      nev: "Anna",
      felhasznalonev: "anna456",
      elerhetoseg: "anna@mail.com",
    },
  ]);

  // Állapot a gombokhoz
  const [megtekintett, setMegtekintett] = useState(null);

  // Gomb kattintás kezelése
  const kezeloGombKattintas = (megjelenitett) => {
    setMegtekintett(megjelenitett);
  };

  // Hirdetés törlés
  const hirdetesTorles = (hirdetes) => {
    setHirdetesek(hirdetesek.filter(item => item !== hirdetes));
  };

  // Felhasználó törlés
  const felhasznaloTorles = (felhasznalo) => {
    setFelhasznalok(felhasznalok.filter(item => item !== felhasznalo));
  };

  return (
    <div className="admin-felület">
      <div className="gombok-tartó">
        <button className="gomb" onClick={() => kezeloGombKattintas('hirdetesek')}>Hirdetések</button>
        <button className="gomb" onClick={() => kezeloGombKattintas('felhasznalok')}>Felhasználók</button>
      </div>

      <div className="tartalom">
        {megtekintett === 'hirdetesek' && (
          <div className="szekcio">
            <h2>Hirdetések</h2>
            <div className="kartya-kontener">
              {hirdetesek.map((hirdetes, index) => (
                <div key={index} className="minimalis-kartya">
                  <div className="kartya-tartalom">
                    <h4>{hirdetes.hirdetesNev}</h4>
                    <p>{hirdetes.elerhetoseg}</p>
                    <p>{hirdetes.leiras}</p>
                  </div>
                  <button className="torles-gomb" onClick={() => hirdetesTorles(hirdetes)}>
                    Törlés
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {megtekintett === 'felhasznalok' && (
          <div className="szekcio">
            <h2>Felhasználók</h2>
            <div className="kartya-kontener">
              {felhasznalok.map((felhasznalo, index) => (
                <div key={index} className="minimalis-kartya">
                  <div className="kartya-tartalom">
                    <h4>{felhasznalo.nev}</h4>
                    <p>{felhasznalo.felhasznalonev}</p>
                  </div>
                  <button className="torles-gomb" onClick={() => felhasznaloTorles(felhasznalo)}>
                    Törlés
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {megtekintett === null && (
          <div className="szekcio">
            <h2>Admin Felület</h2>
            <p>Kérlek válassz egy lehetőséget a fenti gombok közül!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
