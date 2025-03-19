import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Naptar from "./Naptarproba";
import Footer from "./Lablec";
import axios from "axios";
import Filter from "./Filter"; // Importáld a szűrés komponenst!

export default function Home() {
  const [database, setdatabase] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    country: '',
    county: '',
    city: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    isKidFriendly: false,
    isPetFriendly: false,
    rentalTime: ''
  });

  useEffect(() => {
    Get();
  }, [filters]); // Ha a filter változik, újra lekéri az adatokat

  function Get() {
    axios
      .get("https://localhost:7007/Hirdetés/Hirdetes", {
        params: filters // A szűrési paramétereket átadjuk a GET kérésnek
      })
      .then((response) => {
        setdatabase(response.data.data || []);
      })
      .catch((error) => {
        console.error("Hiba: ", error);
      });
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

  // Frissíti a szűrőket
  const updateFilter = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  return (
    <div className="content">
      <div className="naptar-container">
        <Naptar />
      </div>

      {/* Szűrési komponens hozzáadása */}
      <div>
        <Filter updateFilter={updateFilter} /> {/* A Filter komponens most frissíti a szűrőt */}
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
