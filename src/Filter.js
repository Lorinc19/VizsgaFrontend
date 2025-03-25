import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ onApply }) => {
  const [filtersTemp, setFiltersTemp] = useState({
    orszag: "",
    varmegye: "",
    telepules: "",
    tipus: "",
    minAr: "",
    maxAr: "",
    gyerekbarat: false,
    allatbarat: false,
    kiadasiidotartam: "",
  });
  const [isOpen, setIsOpen] = useState(true);

  const toggleFilter = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFiltersTemp((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    if (Number(filtersTemp.minAr) > Number(filtersTemp.maxAr)) {
      alert("A minimum ár nem lehet nagyobb, mint a maximum ár!");
      return;
    }

    onApply(filtersTemp); // Szűrés alkalmazása
  };

  return (
    <div className={`filter-panel ${isOpen ? '' : 'closed'}`}>
      {isOpen ? (
        <>
            <div className="filter-header">
      <h2>Szűrés</h2>
      <button className="close-btn" onClick={toggleFilter}>×</button>
      </div>
      <form onSubmit={handleFilterSubmit}>
        {/* Szűrési inputok */}
        <div className="input-group">
          <label>Ország</label>
          <input
            type="text"
            name="orszag"
            value={filtersTemp.orszag}
            onChange={handleChange}
            placeholder="Ország"
          />
        </div>
        <div className="input-group">
          <label>Vármegye</label>
          <input
            type="text"
            name="varmegye"
            value={filtersTemp.varmegye}
            onChange={handleChange}
            placeholder="Vármegye"
          />
        </div>
        <div className="input-group">
          <label>Település</label>
          <input
            type="text"
            name="telepules"
            value={filtersTemp.telepules}
            onChange={handleChange}
            placeholder="Település"
          />
        </div>
        <div className="input-group">
          <label>Ingatlan típusa</label>
          <select
            name="tipus"
            onChange={handleChange}
            value={filtersTemp.tipus}
          >
            <option value="">Válassz...</option>
            <option value="lakás">Lakás</option>
            <option value="ház">Ház</option>
            <option value="mindkettő">Mindkettő</option>
          </select>
        </div>
        <div className="input-group">
          <label>Ár (min)</label>
          <input
            type="number"
            name="minAr"
            value={filtersTemp.minAr}
            onChange={handleChange}
            placeholder="Minimum ár (Ft)"
            title="Add meg a minimum árat forintban"
          />
        </div>
        <div className="input-group">
          <label>Ár (max)</label>
          <input
            type="number"
            name="maxAr"
            value={filtersTemp.maxAr}
            onChange={handleChange}
            placeholder="Maximum ár (Ft)"
            title="Add meg a maximum árat forintban"
          />
        </div>
        <div className="input-group">
          <label>Gyerekbarát</label>
          <input
            className="form-check form-switch"
            type="checkbox"
            name="gyerekbarat"
            onChange={handleChange}
            checked={filtersTemp.gyerekbarat}
          />
        </div>
        <div className="input-group">
          <label>Állatbarát</label>
          <input
            className="form-check form-switch"
            type="checkbox"
            name="allatbarat"
            onChange={handleChange}
            checked={filtersTemp.allatbarat}
          />
        </div>
        <div className="input-group">
          <label>Kiadási idő (hó)</label>
          <input
            type="number"
            name="kiadasiidotartam"
            min="1"
            max="12"
            value={filtersTemp.kiadasiidotartam}
            onChange={handleChange}
            placeholder="Kiadási idő hónapokban"
          />
        </div>

        {/* Szűrés gomb */}
        <div className="input-group">
          <button type="submit" className="filter-btn">
            Szűrés
          </button>
        </div>
      </form>
      </>
      ) : (<button className="open-icon" onClick={toggleFilter}>→</button>
      )}
    </div>
  );
};

export default Filter;
