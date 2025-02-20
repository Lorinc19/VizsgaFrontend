import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { data } from "react-router-dom";
import Naptar from  "./Naptarproba";

export default function Home() {

  const [database, setdatabase] = useState([])
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Get()
  
  }, [])
  
  function Get() {
    //https://localhost:7007/Hirdetés/Hirdetess adat.js
    fetch('https://localhost:7007/Hirdetés/Hirdetes')
      .then(response => response.json())
      .then(data => setdatabase(data))
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

  return (
    <div>
      <Naptar/>
      <div className="container content">
        <div className="row" id="adsContainer">
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
            <div className="row justify-content-center mx-auto col-md-4" style={{ paddingBottom: "20px", paddingTop: "10px"}}>
            {database.map(databases => (
              <Card felhasznalo={databases} getFv={Get} onClick={() => handleCardClick(databases)}/>

            ))}
            </div>
          }  
        </div>
      </div>
      {isModalOpen && <Modal data={selectedCard} onClose={handleCloseModal} />}
    </div>
  

    
  );
}