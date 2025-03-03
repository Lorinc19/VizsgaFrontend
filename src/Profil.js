import React, { useEffect, useState } from 'react'
import './App.css'; // Importáljuk a CSS fájlt
import { Link } from 'react-router-dom';

export default function Profil({ id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7007/Felhasznaló/${id}`)
            .then(response => response.json()) // JSON formátumra alakítjuk
            .then(data => {
                setData(data); // Az adatokat beállítjuk a state-be
            })
    }, [id]);

    return (
        <div className="profil-container">
            <div className="profil-box">
                <h1><strong>Vezetéknév:</strong> {data.Csaladnev}</h1>
                <h1><strong>Keresztnév:</strong> {data.Vezeteknev}</h1>
                <p><strong>Életkor:</strong> {data.Kor}</p>
                <p><strong>Email:</strong> {data.Email}</p>
                <Link to="/hirdetes">
                  <button className='btn btn-warning'>Hirdetések</button>
                </Link>
            </div>
        </div>
    )
}
