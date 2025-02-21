import React, { useState } from 'react'


export default function Szuresfeltetelek() {
// Szuresfeltetelek.js

    // A lenyíló menü állapotának kezelése
    const [isOpen, setIsOpen] = useState(false);
    
    // Szűrőfeltételek (checkboxok)
    const filters = [
        { label: 'Feltétel 1', value: 'feltetel1' },
        { label: 'Feltétel 2', value: 'feltetel2' },
        { label: 'Feltétel 3', value: 'feltetel3' }
    ];

    // A kiválasztott szűrők állapotának kezelése
    const [selectedFilters, setSelectedFilters] = useState([]);

    // A lenyíló menü váltása (nyitás/bezárás)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Checkbox változása
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedFilters((prevState) =>
            prevState.includes(value)
                ? prevState.filter((item) => item !== value)
                : [...prevState, value]
        );
    };

    // A "Szűrés alkalmazása" gomb kattintás eseménykezelője
    const handleApplyFilters = () => {
        console.log('Kiválasztott szűrők:', selectedFilters);

        // Szűrők elküldése a backendnek AJAX segítségével
        fetch('/api/szures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filters: selectedFilters }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Eredmények:', data.results);
            })
            .catch((error) => {
                console.error('Hiba a kérés során:', error);
            });
    };

    return (
        <div className="dropdown-container">
            {/* "Szűrők" gomb */}
            <button onClick={toggleMenu} className="filter-button">
                Szűrők
            </button>

            {/* Lenyíló menü, amely a szűrőfeltételeket tartalmazza */}
            {isOpen && (
                <div className="filters-dropdown">
                    {filters.map((filter) => (
                        <div key={filter.value}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={filter.value}
                                    onChange={handleCheckboxChange}
                                />
                                {filter.label}
                            </label>
                        </div>
                    ))}

                    {/* Szűrés alkalmazása gomb */}
                    <button onClick={handleApplyFilters} className="apply-button">
                        Szűrés alkalmazása
                    </button>
                </div>
            )}
        </div>
    );
    
};


  

