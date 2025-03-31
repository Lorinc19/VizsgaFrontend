import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cardh(props) {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");  // User ID lekérése a localStorage-ból

    const [editMode, setEditMode] = useState(false);  // Állapot a módosításhoz
    const [updatedData, setUpdatedData] = useState({
        id:props.hirdetes.id,
        leiras:  "",
        elerhetoseg: "",
        hirdetesnev: "",
        orszag: "",
        varmegye: "",
        telepules: "",
        utca: "",
        hazszam:  "",
        tipus: "",
        ar:  0,
        gyerekbarat: false,
        allatbarat: false,
        kiadasiidotartam: ""
    });  // Hirdetés adatainak kezdeti értékei a props-ból
    
    const [message, setMessage] = useState("");  // Üzenet megjelenítéséhez

    // Törlés funkció
    const userDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/Advertisement/${id}`)
            .then(function (response) {
                console.log(response);
                alert("Sikeres törlés");
                props.admingetfv();
            })
            .catch(error => {
                console.error("Hiba a törlés során:", error);
            });
    }

    // Adatok mentése
    const handleSaveChanges = (id) => {
        axios.put(`${process.env.REACT_APP_API_URL}/Advertisement/Puthird`, 
        console.log(props.hirdetes.id),
        {
            
            updatedData  // Az új adatokat küldjük
        })
            .then(response => {
                setMessage("Hirdetés sikeresen módosítva.");
                setEditMode(false);  // Kilépünk a szerkesztési módból
            })
            .catch(error => {
                console.error("Hiba a PUT kérés során:", error);
                setMessage("Hiba az adatok módosítása során.");
            });
    };

    // Bemeneti mezők változásainak kezelése
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData({
            updatedData,
            [name]: value
        });
    };

    return (
        <div id='adminCards'>
            <div className="customCard" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Hirdetésnév: {props.hirdetes.hirdetesnev}</h4>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Leírás: {props.hirdetes.leiras}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Elérhetőség: {props.hirdetes.elerhetoseg}</h6>
                    <p className="card-text">Ár: {props.hirdetes.ar} Ft</p>
                    <p className="card-text">Ország: {props.hirdetes.orszag}</p>
                    <p className="card-text">Vármegye: {props.hirdetes.varmegye}</p>
                    <p className="card-text">Település: {props.hirdetes.telepules}</p>
                    <p className="card-text">Utca és házszám: {props.hirdetes.utca} {props.hirdetes.hazszam}</p>
                    {role !== "Admin" ? (
                        <button className="btn btn-primary" onClick={() => setEditMode(true)}>Módosítás</button>
                    ) : null}

                    {!editMode ? (
                        <button onClick={() => {
                            if (window.confirm("Biztos törölni szeretnéd?")) {
                                userDelete(props.hirdetes.id);
                            }
                        }}>
                            <i className="bi bi-trash3"></i> Törlés
                        </button>
                    ) : (
                        <div className="profil-box">
                            <h2>Módosítás</h2>
                            <div className="input-container">
                                <label>Hirdetés neve:</label>
                                <input type="text" name="hirdetesnev" value={props.hirdetes.hirdetesnev.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Leírás:</label>
                                <textarea name="leiras" value={props.hirdetes.leiras.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Elérhetőség:</label>
                                <input type="text" name="elerhetoseg" value={props.hirdetes.elerhetoseg.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Ár:</label>
                                <input type="number" name="ar" value={props.hirdetes.ar.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Ország:</label>
                                <input type="text" name="orszag" value={props.hirdetes.orszag.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Vármegye:</label>
                                <input type="text" name="varmegye" value={props.hirdetes.varmegye.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Település:</label>
                                <input type="text" name="telepules" value={props.hirdetes.telepules.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Utca:</label>
                                <input type="text" name="utca" value={props.hirdetes.utca.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Házszám:</label>
                                <input type="text" name="hazszam" value={props.hirdetes.hazszam.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Tipus:</label>
                                <input type="text" name="tipus" value={props.hirdetes.tipus.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Gyerekbarát:</label>
                                <input type="checkbox" name="gyerekbarat" checked={props.hirdetes.gyerekbarat.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Állatbarát:</label>
                                <input type="checkbox" name="allatbarat" checked={props.hirdetes.allatbarat.value} onChange={handleInputChange} />
                            </div>
                            <div className="input-container">
                                <label>Kiadási időtartam:</label>
                                <input type="text" name="kiadasiidotartam" value={props.hirdetes.kiadasiidotartam.value} onChange={handleInputChange} />
                            </div>
                            <button className="alma1" onClick={handleSaveChanges}>Mentés</button>
                            <button className="alma2" onClick={() => setEditMode(false)}>Mégse</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
