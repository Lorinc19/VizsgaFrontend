import React, { useState } from 'react';
import axios from 'axios';

export default function Cardh(props) {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");  // User ID lekérése a localStorage-ból

    const [editMode, setEditMode] = useState(false);  // Állapot a módosításhoz
    const [updatedData, setUpdatedData] = useState({
        leiras: "",
        elerhetoseg: "",
        hirdetesnev: "",
        orszag: "",
        varmegye: "",
        telepules: "",
        utca: "",
        hazszam: "",
        tipus: "",
        ar: 0,
        gyerekbarat: false,
        allatbarat: false,
        kiadasiidotartam: "",
        kepURL: ""
    }); 

    const [message, setMessage] = useState("");  

    // Törlés funkció
    const userDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/Advertisement?id=${id}`)
            .then(function (response) {
                console.log(response);
                alert("Sikeres törlés");
                props.hirdgetfv();
            })
            .catch(error => {
                console.error("Hiba a törlés során:", error);
            });
    }

    // Adatok mentése
    const handleSaveChanges = (e) => {
        e.preventDefault();

        axios.put(`${process.env.REACT_APP_API_URL}/Advertisement/Puthird?id=${props.hirdetes.id}`, {
            ...updatedData,
            ar: Number(updatedData.ar)
        }).then(() => {
            setMessage("Hirdetés sikeresen módosítva.");
            setTimeout(() => {
                setEditMode(false);
            }, 1000);  // Kilépünk a szerkesztési módból
            props.hirdgetfv();
        })
            .catch(error => {
                console.error("Hiba a PUT kérés során:", error.response?.data);
                setMessage("Hiba az adatok módosítása során.");
            });
    };

    // Bemeneti mezők változásainak kezelése
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUpdatedData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleEdit = () => {
        setMessage("");
        const { id, felhasznaloId, ...rest } = props.hirdetes;
        setUpdatedData({
            ...rest,
            kepURL: props.hirdetes.kepURL || ""
        });
        setEditMode(true);
    };

    return (
        <div className="customCard" style={{ width: "18rem" }}>
            <div className="card-body">
                {editMode ? (
                    <>
                        <div className="input-container">
                            <label>Hirdetésnév:</label>
                            <input type="text" name="hirdetesnev" value={updatedData.hirdetesnev} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label>Leírás:</label>
                            <textarea name="leiras" value={updatedData.leiras} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label>Elérhetőség:</label>
                            <input type="text" name="elerhetoseg" value={updatedData.elerhetoseg} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label>Ár:</label>
                            <input type="number" name="ar" value={updatedData.ar} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label>Ország:</label>
                            <input type="text" name="orszag" value={updatedData.orszag} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label>Vármegye:</label>
                            <input type="text" name="varmegye" value={updatedData.varmegye} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label>Település:</label>
                            <input type="text" name="telepules" value={updatedData.telepules} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label>Utca:</label>
                            <input type="text" name="utca" value={updatedData.utca} onChange={handleInputChange} required />
                        </div>
                        <div className="input-container">
                            <label>Házszám:</label>
                            <input type="text" name="hazszam" value={updatedData.hazszam} onChange={handleInputChange} required />
                        </div>
                        <div className="input-container">
                            <label>Tipus:</label>
                            <input type="text" name="tipus" value={updatedData.tipus} onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label className="custom-checkbox">
                                <span>Gyerekbarát</span>
                                <input type="checkbox" name="gyerekbarat" checked={updatedData.gyerekbarat} onChange={handleInputChange} />
                            </label>
                        </div>
                        <div className="input-container">
                            <label className="custom-checkbox">
                                <span>Állatbarát</span>
                                <input type="checkbox" name="allatbarat" checked={updatedData.allatbarat} onChange={handleInputChange} />
                            </label>
                        </div>
                        <div className="input-container">
                            <label>Kiadási időtartam:</label>
                            <input type="number" min={1} max={12} name="kiadasiidotartam" value={updatedData.kiadasiidotartam} onChange={handleInputChange} />
                        </div>

                        <div className="button-row mt-3">
                            <button type="button" className="btn btn-success me-2" onClick={handleSaveChanges}>Mentés</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>Mégse</button>
                        </div>
                        {message && (
                            <div className="message-box mt-2">
                                <p className={message.includes("sikeresen") ? "success-text" : "error-text"}>{message}</p>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <h4 className="card-title">Hirdetésnév: {props.hirdetes.hirdetesnev}</h4>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Leírás: {props.hirdetes.leiras}</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Elérhetőség: {props.hirdetes.elerhetoseg}</h6>
                        <p className="card-text">Ár: {props.hirdetes.ar} Ft</p>
                        <p className="card-text">Ország: {props.hirdetes.orszag}</p>
                        <p className="card-text">Vármegye: {props.hirdetes.varmegye}</p>
                        <p className="card-text">Település: {props.hirdetes.telepules}</p>
                        <p className="card-text">Utca és házszám: {props.hirdetes.utca} {props.hirdetes.hazszam}</p>

                        {role === "Admin" && (
                            <div className="button-row mt-3">
                                <button onClick={handleEdit}><i class="bi bi-pen"></i></button>
                                <button onClick={() => {
                                    if (window.confirm("Biztos törölni szeretnéd?")) {
                                        userDelete(props.hirdetes.id);
                                    }
                                }}>
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

        </div>
    );
}