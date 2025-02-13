import React, { useState } from "react";
import Modal from "./Modal"; // Importáljuk a modált

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);  // A modál megnyitása

  // Kattintásra megnyitjuk a modált
  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(true);  // Megnyitjuk a modált
  };

  // Modál bezárása
  const handleCloseModal = (e) => {
   e.stopPropagation() 
    setIsOpen(false);  // Ha bezárjuk a modált, visszaállítjuk az aktív státuszt
  };

  return (
    <div className="card" onClick={!isOpen ? handleClick : undefined} >
      {/* Ha a modál nem nyitva, akkor látszik a kártya */}
      {!isOpen ? (
        <>
          <div className="image-box" >
            <img src="https://www.oc.hu/build/images/_sets/bauhaus-1500.webp" alt="Image" />
          </div>
          <div className="feljo">
          <h4>{props.felhasznalo.hirdetesnev}</h4>
            <h5>{props.felhasznalo.elerhetoseg}</h5>
            <p>Leírás: {props.felhasznalo.leiras}</p>
          </div>
          </>
      ) : (<Modal data="" onClose={handleCloseModal} />)}
    </div>
  );
}
