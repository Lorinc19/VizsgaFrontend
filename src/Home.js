import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { data } from "react-router-dom";
import Naptar from "./Naptarproba";
import Footer from "./Lablec";

export default function Home() {
  const [database, setdatabase] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Get();
  }, []);

  function Get() {
    //https://localhost:7007/Hirdetés/Hirdetess adat.js
    fetch("https://localhost:7007/Hirdetés/Hirdetes")
      .then((response) => response.json())
      .then((data) => setdatabase(data));
  }

  // Kattintásra megnyitjuk a modált
  const handleCardClick = (felhasznalo) => {
    setSelectedCard(felhasznalo);
    setIsModalOpen(true);
  };

  // Modál bezárása
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseOverlay = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
  }

}

  return (
    <div>
      <Naptar />
      <div className="content" id="container">
        <div className="row" id="adsContainer">
          <div id="column"></div>

          {
            /*
            database.map(home => (
              <div
                key={home.id}
                className="row justify-content-center mx-auto col-md-8"
                style={{ paddingBottom: "20px", paddingTop: "10px" }}
              >
                <Card id={home.id} home={database}/>
              </div>
            ))
            </div>
            */
            <div  id="column">
              <div
                className="row justify-content-center mx-auto "
                style={{ paddingBottom: "20px", paddingTop: "10px" }}
              >
                {database.map((databases) => (
                  <Card
                    felhasznalo={databases}
                    getFv={Get}
                    onClick={() => handleCardClick(databases)}
                  />
                ))}
              </div>
            </div>
            
          }
          <div id="column">

          </div>
        </div>
      </div>
      {console.log(selectedCard)}
      {isModalOpen && (<Modal data={selectedCard} onClose={handleCloseModal} onCloseOverlay={handleCloseOverlay}/>)}
    </div>
  );
}
