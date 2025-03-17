import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function NewHousePost() {
  // localStorage-ból userId, azt is küldeni kell
  const [formData, setFormData] = useState({
    
  felhasznaloID: 0,
  leiras: " ",
  elerhetoseg: " ",
  hirdetesnev: " ",
  kepURL: " ",
  hirdetesAdatok: {
    orszag: " ",
    varmegye: " ",
    telepules: " ",
    utcahazszam: " ",
    tipus: " ",
    ar: 0,
    gyerekbarat: false,
    allatbarat: false,
    kiadasiidotartam: " ",
  }
  });

  /*
  {
  "felhasznaloID": 0,
  "leiras": "string",
  "elerhetoseg": "string",
  "hirdetesnev": "string",
  "kepURL": "string",
  "hirdetesAdatok": {
    "orszag": "string",
    "varmegye": "string",
    "telepules": "string",
    "utcahazszam": "string",
    "tipus": "string",
    "ar": 0,
    "gyerekbarat": true,
    "allatbarat": true,
    "kiadasiidotartam": "string"
  }
}
  */

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files : type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.hirdetesnev.trim()) errors.hirdetesnev = "Hirdetés név szükséges!";
    if (!formData.leiras.trim()) errors.leiras = "A leírás szükséges!";
    if (!formData.elerhetoseg || !/^\d{11}$/.test(formData.elerhetoseg)) {
      errors.elerhetoseg = "Érvényes telefonszámot adj meg (11 számjegy).";
    }
    if (!formData.orszag.trim()) errors.orszag = "Ország szükséges!";
    if (!formData.varmegye.trim()) errors.varmegye = "Vármegye szükséges!";
    if (!formData.telepules.trim()) errors.telepules = "Település szükséges!";
    if (!formData.utcahazszam.trim()) errors.utcahazszam = "Utca és házszám szükséges!";
    if (!formData.tipus.trim()) errors.tipus = "Típus szükséges! (Pl: lakás, ház)";
    if (!formData.ar) errors.ar = "Helyes árat kell megadni!";
    if (!formData.kepURL) errors.kepURL = "Kép feltöltése kötelező!";
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const form = new FormData();
    form.append("hirdetesnev", formData.hirdetesnev);
    form.append("leiras", formData.leiras);
    form.append("elerhetoseg", formData.elerhetoseg);
    form.append("orszag", formData.orszag);
    form.append("varmegye", formData.varmegye);
    form.append("telepules", formData.telepules);
    form.append("utcahazszam", formData.utcahazszam);
    form.append("tipus", formData.tipus);
    form.append("ar", formData.ar);
    form.append("gyerekbarat", formData.gyerekbarat);
    form.append("allatbarat", formData.allatbarat);
    form.append("kiadasiidotartam", formData.kiadasiidotartam);
    form.append("kepURL", formData.kepURL); // Kép feltöltése

    try {
      const response = await axios.post("https://localhost:7007/Hirdetés", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Sikeres hirdetés felvétel!");
      console.log("Hirdetés sikeres:", response.data);
    } catch (error) {
      setMessage("Hiba történt a hirdetés felvétele során.");
      console.error("Hirdetés hiba:", error.response?.data || error.message);
    }
  };

  return (
    <div className="new-listing-form">
      <h2>Új hirdetés felvétele</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="hirdetesnev"
            required
            value={formData.hirdetesnev}
            onChange={handleChange}
          />
          <label>Hirdetés név</label>
          {errors.hirdetesnev && <p className="error-text">{errors.hirdetesnev}</p>}
        </div>

        <div className="input-box">
          <textarea
            name="leiras"
            required
            value={formData.leiras}
            onChange={handleChange}
          />
          <label>Leírás</label>
          {errors.leiras && <p className="error-text">{errors.leiras}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="elerhetoseg"
            value={formData.elerhetoseg}
            onChange={handleChange}
            placeholder="Telefonszám"
            required
          />
          <label>Telefonszám</label>
          {errors.elerhetoseg && <p className="error-text">{errors.elerhetoseg}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="orszag"
            value={formData.hirdetesAdatok.orszag}
            onChange={handleChange}
            placeholder="Ország"
            required
          />
          <label>Ország</label>
          {errors.orszag && <p className="error-text">{errors.orszag}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="varmegye"
            value={formData.hirdetesAdatok.varmegye}
            onChange={handleChange}
            placeholder="Vármegye"
            required
          />
          <label>Vármegye</label>
          {errors.varmegye && <p className="error-text">{errors.varmegye}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="telepules"
            value={formData.hirdetesAdatok.telepules}
            onChange={handleChange}
            placeholder="Település"
            required
          />
          <label>Település</label>
          {errors.telepules && <p className="error-text">{errors.telepules}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="utcahazszam"
            value={formData.hirdetesAdatok.utcahazszam}
            onChange={handleChange}
            placeholder="Utca és házszám"
            required
          />
          <label>Utca és házszám</label>
          {errors.utcahazszam && <p className="error-text">{errors.utcahazszam}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="tipus"
            value={formData.hirdetesAdatok.tipus}
            onChange={handleChange}
            placeholder="Típus"
            required
          />
          <label>Típus</label>
          {errors.tipus && <p className="error-text">{errors.tipus}</p>}
        </div>

        <div className="input-box">
          <input
            type="number"
            name="ar"
            value={formData.hirdetesAdatok.ar}
            onChange={handleChange}
            placeholder="Ár"
            required
          />
          <label>Ár</label>
          {errors.ar && <p className="error-text">{errors.ar}</p>}
        </div>

        <div className="input-box">
          <input
            type="file"
            name="kepURL"
            accept="kepURL/*"
            onChange={handleChange}
            required
          />
          <label>Kép</label>
          {errors.kepURL && <p className="error-text">{errors.kepURL}</p>}
        </div>

        <div className="input-box">
        <input
            type="text"
            name="kiadasiidotartam"
            value={formData.hirdetesAdatok.Kiadasiidotartam}
            onChange={handleChange}
            placeholder="Kiadasi idotartam"
            required
          />
          <label>Kiadási időtartam</label>
        </div>

        <div className="input-box">
          <input
            type="checkbox"
            name="gyerekbarat"
            checked={formData.hirdetesAdatok.gyerekbarat}
            onChange={handleChange}
          />
          <label>Gyerek barát</label>
        </div>

        <div className="input-box">
          <input
            type="checkbox"
            name="allatbarat"
            checked={formData.hirdetesAdatok.allatbarat}
            onChange={handleChange}
          />
          <label>Állatbarát</label>
        </div>



        <button type="submit" className="btn">Hirdetés felvétel</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
