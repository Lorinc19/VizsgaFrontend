import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewHousePost() {
  
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
      FelhasznaloID: "",
      Leiras: "",
      Elerhetoseg: "",
      Hirdetesnev: "",
      KepURL: "",
      Orszag: "",
      Varmegye: "",
      Telepules: "",
      Utcahazszam: "",
      Tipus: "",
      Ar: 0,
      Gyerekbarat: false,
      Allatbarat: false,
      Kiadasiidotartam: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };

    const validate = () => {
      let errors = {};
      
      if (!formData.FelhasznaloID.trim()) errors.FelhasznaloID = "Vezetéknév szükséges!";
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validate()) return;

      try {
        const response = await axios.post("https://localhost:7007/Hirdetés/Post", formData);
        setMessage("Sikeres regisztráció! Jelentkezz be.");
        console.log("Regisztráció sikeres:", response.data);
      } catch (error) {
        setMessage("Hiba történt a regisztráció során!");
        console.error("Regisztrációs hiba:", error.response?.data || error.message);
      }
    };
      
    
  return (

    <div className="p-5 content bg-whitesmoke text-center">
      <h2>Új hirdetés</h2>
      
       <form onSubmit={handleSubmit}>
        

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Felhasznaló id:</label>
          <div className="col-sm-9">
            <input 
              type="text" 
              name="felhasznaloID"  
              required 
              value={formData.FelhasznaloID}
              onChange={handleChange} 
              className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Leírás:</label>
          <div className="col-sm-9">
            <input 
              type="text" 
              name="leiras" 
              required 
              value={formData.Leiras} 
              onChange={handleChange} 
              className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Elérhetőség:</label>
          <div className="col-sm-9">
            <input 
              type="text" 
              name="elerhetoseg"  
              required 
              value={formData.Elerhetoseg} 
              onChange={handleChange} 
              className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Hirdetesnev:</label>
          <div className="col-sm-9">
            <input 
            type="text" 
            name="hirdetesnev"  
            required 
            value={formData.Hirdetesnev} 
            onChange={handleChange} 
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">KépURL:</label>
          <div className="col-sm-9">
            <input 
            type="text" 
            name="kepURL"  
            required 
            value={formData.KepURL} 
            onChange={handleChange} 
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Orszag:</label>
          <div className="col-sm-9">
            <input 
            type="text" 
            name="orszag"  
            required 
            value={formData.Orszag} 
            onChange={handleChange} 
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Vármegye:</label>
          <div className="col-sm-9">
            <input 
            type="text" 
            name="varmegye"  
            required 
            value={formData.Varmegye} 
            onChange={handleChange} 
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Település:</label>
          <div className="col-sm-9">
            <input 
            type="text" 
            name="telepules"  
            required 
            value={formData.Telepules} 
            onChange={handleChange} 
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Utca házszám:</label>
          <div className="col-sm-9">
            <input 
            type="text" 
            name="utcahazszam"  
            required 
            value={formData.Utcahazszam} 
            onChange={handleChange} 
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ház típusa:</label>
          <div className="col-sm-9">
            <input 
            type="text" 
            name="tipus"  
            required 
            value={formData.Tipus} 
            onChange={handleChange} 
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ár:</label>
          <div className="col-sm-9">
            <input
            type="number"
            name="ar"
            required
            value={formData.Ar}
            onChange={handleChange}
            className="form-control" 
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Gyerek barát:</label>
          <div className="col-sm-9">
            <input
            type="checkbox"
            name="gyerekbarat"
            required
            checked={formData.Gyerekbarat}
            onChange={handleChange}
            className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Állatbarát:</label>
          <div className="col-sm-9">
            <input
            type="checkbox"
            name="allatbarat"
            required
            checked={formData.Allatbarat}
            onChange={handleChange}
            className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Kiadás idő tartalma(hó):</label>
          <div className="col-sm-9">
            <input
            type="text"
            name="kiadasiidotartam"
            required
            value={formData.Kiadasiidotartam}
            onChange={handleChange}
            className="form-control"
            />
          </div>
        </div>



        <button type="submit" className="btn btn-success">
          Küldés
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )

}