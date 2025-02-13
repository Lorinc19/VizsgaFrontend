import React, { useState } from "react";
import Modal from "./Modal"; // Importáljuk a modált

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);  // A modál megnyitása
  const [modalData, setModalData] = useState(null);  // Az adatokat, amiket a modálban jelenítünk meg
  const [isClicked, setIsClicked] = useState(false);  // Az állapot, hogy a kártya aktív-e

  // Kattintásra megnyitjuk a modált
  const handleClick = () => {
    setModalData(props.felhasznalo);  // Beállítjuk a modál adatokat
    setIsOpen(true);  // Megnyitjuk a modált
    setIsClicked(true);  // A kártya inaktívvá válik
  };

  // Modál bezárása
  const handleCloseModal = () => {
    setIsOpen(false); // Bezárjuk a modált
    setIsClicked(false);  // Ha bezárjuk a modált, visszaállítjuk az aktív státuszt
  };

  return (
    <div className="card" style={{margin:"10px"}}>
      {/* Ha a modál nem nyitva, akkor látszik a kártya */}
      {!isOpen && (
        <>
          <div className="image-box" onClick={handleClick}>
            <img src="/haziko.png" alt="Image" />
          </div>
          <div className={`feljo ${isClicked ? 'inactive' : ''}`}>
            <h4>{props.felhasznalo.hirdetesnev}</h4>
            <h5>{props.felhasznalo.elerhetoseg}</h5>
            <p>Leírás: {props.felhasznalo.leiras}</p>
          </div>
        </>
      )}

      {/* Ha a modál nyitva van, akkor jelenik meg a Modal komponens */}
      {isOpen && <Modal data={modalData} onClose={handleCloseModal} />}
    </div>
  );
}
