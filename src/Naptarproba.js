import React, { useState, useEffect } from 'react';
import './App.css';

export default function Naptar() {
  
  const [ev, setEv] = useState(new Date().getFullYear());  // Aktuális év
  const [honap, setHonap] = useState(new Date().getMonth()); // Aktuális hónap
  const [napok, setNapok] = useState([]);
  const hetNapjai = ["Hét", "Ked", "Sze", "Csü", "Pé", "Szo","Vas"]; // Hét napjai
  const [animacioIranya, setAnimacioIranya] = useState("");

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
      napokArray.push({ day: nap, isToday: nap === new Date().getDate() && honap === new Date().getMonth() });
    }

    setNapok(napokArray);
  };

  // a hónap változásakor
  useEffect(() => {
    generaldNaptarat();
  }, [ev, honap]);

  // Előző hónap
  const elozoHonap = () => {
    setAnimacioIranya("left");
    setTimeout(() => {
      setHonap(honap === 0 ? 11 : honap - 1);
      if (honap === 0) setEv(ev - 1);
    }, 300);
  };

  // Következő hónap
  const kovetkezoHonap = () => {
    setAnimacioIranya("right");
    setTimeout(() => {
      setHonap(honap === 11 ? 0 : honap + 1);
      if (honap === 11) setEv(ev + 1);
    }, 300);
  };

  return (
    <div id="naptar-container">
      <div id="honap-ev-cim">
        <button onClick={elozoHonap}>&lt;</button>
        {" " + new Date(ev, honap).toLocaleString("hu", { month: "long" })} {ev + " "}
        <button onClick={kovetkezoHonap}>&gt;</button>
      </div>

      <div id="het-napjai">
        {hetNapjai.map((nap, index) => (
          <div key={index} className="het-nap">{nap}</div>
        ))}
      </div>

      <div className={`napok animacio-${animacioIranya}`} onAnimationEnd={() => setAnimacioIranya("")}>
        {napok.map((nap, index) => (
          <div
            key={index}
            className={`nap ${nap.isToday ? "ma" : ""} ${nap.isEmpty ? "ures" : ""}`}
          >
            {nap.day}
          </div>
        ))}
      </div>
    </div>
  );
}