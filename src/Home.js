import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
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
    fetch("https://localhost:7007/Hirdetés/Hirdetes")
      .then((response) => response.json())
      .then((data) => setdatabase(data))
      .catch((error) => console.error("Hiba: ", error));
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
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="content">
      <div className="naptar-container">
        <Naptar />
      </div>

        <div className="cards-container">
            {database.map((databases) => (
              <Card
                key={databases.id}
                felhasznalo={databases}
                getFv={Get}
                onClick={() => handleCardClick(databases)}
              />
            ))}
        </div>
      {console.log(selectedCard)}
      {isModalOpen && (
        <Modal
          data={selectedCard}
          onClose={handleCloseModal}
          onCloseOverlay={handleCloseOverlay}
        />
      )}
    </div>
  );
}