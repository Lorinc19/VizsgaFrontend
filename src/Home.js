import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Naptar from "./Naptarproba";
import axios from "axios";
import Filter from "./Filter";
import { BeatLoader } from "react-spinners";

export default function Home({ isLoggedIn }) {
  const [database, setdatabase] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // Kiválasztott kártya tárolása
  const [isModalOpen, setIsModalOpen] = useState(false); // A modal nyitott állapota
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [noResult, setNoResult] = useState(false);

  // Adatok lekérése a szűrők változása szerint
  useEffect(() => {
    Get(filters);
  }, [filters]);

  const visibleHouses = isLoggedIn ? database : database.slice(0, 5);

  // Adatok lekérése
  function Get(filters = {}) {
    setIsLoading(true);
    axios.get(`${process.env.REACT_APP_API_URL}/Advertisement/All`)
      .then((response) => {
        if (!(response.status < 300)) {
          throw new Error();
        }

        let result = response.data;

        if (Object.keys(filters).length > 0) {
          result = result.filter((hirdetes) => {
            return (
              (!filters.orszag ||
                hirdetes.orszag
                  ?.toLowerCase()
                  .includes(filters.orszag.toLowerCase())) &&
              (!filters.varmegye ||
                hirdetes.varmegye
                  ?.toLowerCase()
                  .includes(filters.varmegye.toLowerCase())) &&
              (!filters.telepules ||
                hirdetes.telepules
                  ?.toLowerCase()
                  .includes(filters.telepules.toLowerCase())) &&
              (!filters.tipus ||
                hirdetes.tipus
                  ?.toLowerCase()
                  .includes(filters.tipus.toLowerCase())) &&
              (!filters.gyerekbarat || hirdetes.gyerekbarat === true) &&
              (!filters.allatbarat || hirdetes.allatbarat === true) &&
              (!filters.kiadasiidotartam ||
                hirdetes.kiadasiidotartam === filters.kiadasiidotartam) &&
              (!filters.minAr || hirdetes.ar >= Number(filters.minAr)) &&
              (!filters.maxAr || hirdetes.ar <= Number(filters.maxAr))
            );
          });
        }

        setdatabase(result);
        setNoResult(result.length === 0);
      })
      .catch((error) => {
        console.error("Hiba: ", error);
      })
      .finally(() => setTimeout(() => {
        setIsLoading(false) // 1 másodperc várakozás, hogy megmutassuk a loading ikont
      }, 1000));
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

  return (
    <div className="content">
      {/* Szűrési komponens hozzáadása */}
      <div className="filter-container">
        <Filter onApply={setFilters} />
      </div>

      <div className="card-container">
        {isLoading ? (
          <BeatLoader color="#740000" />
        ) : noResult ? (
          <p className="text-danger fw-bold mt-3">
            Nincs a feltételeknek megfelelő hirdetés.
          </p>
        ) : (
          visibleHouses.map((data) => (
            <Card
              key={data.id}
              felhasznalo={data}
              getFv={Get}
              handleCardClick={handleCardClick}
            />
          ))
        )}
      </div>

      {isModalOpen && (
        <Modal
          data={selectedCard}
          onClose={handleCloseModal}
          onCloseOverlay={handleCloseOverlay}
        />
      )}

      <div className="naptar-container">
        <Naptar />
      </div>
    </div>
  );
}