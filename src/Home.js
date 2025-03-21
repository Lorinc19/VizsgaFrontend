import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Naptar from "./Naptarproba";
import Footer from "./Lablec";
import axios from "axios";
import Filter from "./Filter"; // Importáld a szűrés komponenst!

export default function Home() {
  const [database, setdatabase] = useState([]); // Az adatok tárolása
  const [selectedCard, setSelectedCard] = useState(null); // Kiválasztott kártya tárolása
  const [isModalOpen, setIsModalOpen] = useState(false); // A modal nyitott állapota
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

  // Adatok lekérése alapból, a szűrőktől függetlenül, ha üresek
  useEffect(() => {
    Get(); // Alapból minden adat betöltése
  }, []); // Csak egyszer, az oldal betöltődésekor

  // Adatok lekérése a szűrők változása szerint
  useEffect(() => {
    // Ha nem üresek a szűrők, akkor csak azokkal kérjük le az adatokat
    if (Object.values(filters).some(val => val !== '')) {
      Get(filters); // Ha a szűrőkben van valami, akkor szűrt kérés
    } else {
      Get(); // Ha a szűrők üresek, akkor alapból minden adat
    }
  }, [filters]); // A szűrők változása esetén újra hívódik

  // Adatok lekérése
  function Get(filters = {}) {
    axios.get("https://localhost:7007/Hirdetés/Hirdetes", {
        params: filters // Szűrési paraméterek átadása a GET kérésnek
      })
      .then((response) => {

        if (!(response.status < 300)) {
          throw new Error()
        }

        setdatabase(response.data); // Ha nincs adat, üres tömböt adunk vissza
       
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

  // Modál overlay zárása
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
        {/* Ellenőrzés, hogy van-e adat */}
        {database.length > 0 ? (
          database.map((data) => (
            <Card
              key={data.id}
              felhasznalo={data}
              getFv={Get}
              handleCardClick={handleCardClick}
            />
          ))
        ) : (
          <p>Nincsenek elérhető hirdetések.</p> // Ha nincs adat
        )}
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
