import React, { useEffect, useState } from 'react'
import './App.css';
import './Profil.css'; // Importáljuk a CSS fájlt
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Profil({ id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/User/${id}`)
            .then(response => {
                setData(response.data);
            })
    }, [id]);

    return (
        <div className="profil-container">
            <div className="profil-box">
                <h1><strong>Vezetéknév:</strong> {data.Vezeteknev}</h1>
                <h1><strong>Keresztnév:</strong> {data.Keresztnev}</h1>
                <h3>Felhasznalónév: {data.felhasznalonev}</h3>
                <p><strong>Életkor:</strong> {data.Kor}</p>
                <p><strong>Email:</strong> {data.Email}</p>
                <Link to="/hirdetes">
                  <button id='alma'>Hirdetéseim</button>
                </Link>
            </div>
        </div>
    )
}
