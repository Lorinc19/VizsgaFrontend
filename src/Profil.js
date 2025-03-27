import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory helyett
import { jwtDecode } from 'jwt-decode'; // Helyes import
import './App.css';
import './Profil.css'; 
import axios from 'axios';

export default function Profil() {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); // useNavigate hook

    // Ellenőrizd, hogy van token és érvényes
    const token = localStorage.getItem("token");
    let id;

    if (token) {
        try {
            const decodedToken = jwtDecode(token); // Dekódoljuk a tokent
            id = decodedToken.sub; // Feltételezve, hogy a token tartalmazza az 'sub' kulcsot
        } catch (error) {
            console.error("Hiba a token dekódolása közben:", error);
        }
    } else {
        console.error("Nincs token a localStorage-ban");
    }

    useEffect(() => {
        if (id) {
            axios.get(`${process.env.REACT_APP_API_URL}/User/${id}`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error("Hiba a felhasználói adatokat tartalmazó API hívás során:", error);
                });
        }
    }, [id]);

    return (
        <div className="profil-container">
            <div className="profil-box">
                <h1><strong>Vezetéknév:</strong> {data.vezeteknev}</h1>
                <h1><strong>Keresztnév:</strong> {data.keresztnev}</h1>
                <h3>Felhasználónév: {data.userName}</h3>
                <p><strong>Életkor:</strong> {data.kor}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <button id='alma' onClick={() => navigate("/hirdetes")}>Hirdetéseim</button> {/* Navigálás */}
            </div>
        </div>
    );
}
