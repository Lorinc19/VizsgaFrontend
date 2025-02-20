import React, { useState, useEffect } from 'react';
import './App.css';

export default function Naptar() {
  const [ev, setEv] = useState(new Date().getFullYear());  // Aktuális év
  const [honap, setHonap] = useState(new Date().getMonth()); // Aktuális hónap

  const hetNapjai = ["Hét", "Ked", "Sze", "Csü", "Pé", "Szo","Vas"]; // Hét napjai

  const generaldNaptarat = () => {
    const elsoNap = new Date(ev, honap, 1); // Az adott hónap első napja
    const elsoNapIndex = (elsoNap.getDay() === 0 ? 6 : elsoNap.getDay() - 1); // Hétfői kezdéssel
    const napokSzama = new Date(ev, honap + 1, 0).getDate(); // Az adott hónap napjainak száma

    const napokArray = [];

    // Előző hónap napjainak 
    for (let i = elsoNapIndex - 1; i >= 0; i--) {
      napokArray.push({ day: "", isEmpty: true });
    }

    // Az adott hónap napjainak 
    for (let nap = 1; nap <= napokSzama; nap++) {
      napokArray.push({ day: nap, isEmpty: false });
    }

    // Az utolsó hét napjainak 
    const utolsoNapIndex = (elsoNapIndex + napokSzama) % 7;
    for (let i = 1; i <= (7 - utolsoNapIndex) % 7; i++) {
      napokArray.push({ day: "", isEmpty: true });
    }

    setNapok(napokArray);
  };

  const [napok, setNapok] = useState([]);

  // a hónap változásakor
  useEffect(() => {
    generaldNaptarat();
  }, [ev, honap]);

  // Előző hónap
  const elozoHonap = () => {
    if (honap === 0) {
      setHonap(11);
      setEv(ev - 1);
    } else {
      setHonap(honap - 1);
    }
  };

  // Következő hónap
  const kovetkezoHonap = () => {
    if (honap === 11) {
      setHonap(0);
      setEv(ev + 1);
    } else {
      setHonap(honap + 1);
    }
  };

  return (
    <div id="naptar-container">
      <div id="honap-ev-cim">
        <button onClick={elozoHonap}>&lt;</button>
        {new Date(ev, honap).toLocaleString("hu", { month: "long" })} {ev}
        <button onClick={kovetkezoHonap}>&gt;</button>
      </div>

      <div id="het-napjai">
        {hetNapjai.map((nap, index) => (
          <div key={index} className="het-nap">{nap}</div>
        ))}
      </div>

      <div id="napok">
        {napok.map((nap, index) => (
          <div
            key={index}
            className={`nap ${nap.isEmpty ? "ures" : ""}`}
          >
            {nap.isEmpty ? "" : nap.day}
          </div>
        ))}
      </div>
    </div>
  );
}
