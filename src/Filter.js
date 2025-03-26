import React from 'react';  // Csak egyszer importáljuk a React-ot
import './App.css';
import './Filter.css';

const Filter = ({ updateFilter }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFilter({
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    updateFilter(); // Szűrés alkalmazása
  };

  return (
    <div className="filter-container">
      <h2>Szűrés</h2>
      <form onSubmit={handleFilterSubmit}>
        {/* Szűrési inputok */}
        <div className="input-group">
          <label>Ország</label>
          <input
            type="text"
            name="country"
            onChange={handleChange}
            placeholder="Ország"
          />
        </div>
        <div className="input-group">
          <label>Vármegye</label>
          <input
            type="text"
            name="county"
            onChange={handleChange}
            placeholder="Vármegye"
          />
        </div>
        <div className="input-group">
          <label>Település</label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Település"
          />
        </div>
        <div className="input-group">
          <label>Ingatlan típusa</label>
          <select name="propertyType" onChange={handleChange}>
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
            name="minPrice"
            onChange={handleChange}
            placeholder="Min ár"
          />
        </div>
        <div className="input-group">
          <label>Ár (max)</label>
          <input
            type="number"
            name="maxPrice"
            onChange={handleChange}
            placeholder="Max ár"
          />
        </div>
        <div className="input-group">
          <label>Gyerekbarát</label>
          <input
            type="checkbox"
            name="isKidFriendly"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Állatbarát</label>
          <input
            type="checkbox"
            name="isPetFriendly"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Kiadási idő</label>
          <input
            type="number"
            name="rentalTime"
            min="1"
            max="12"
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
    </div>
  );
};

export default Filter;  // A helyes export 
