import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function NewHousePost() {
  const [formData, setFormData] = useState({
    Hirdetesnev: "",
    Leiras: "",
    Elerhetoseg: "",
    Orszag : "",
    Varmegye: "",
    Telepules: "",
    Utcahazszam: "",
    Tipus: "",
    Ar: "",
    Gyerekbarat: false,
    Allatbarat: false,
    Kiadasiidotartam: "",
    KepURL: null,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.Hirdetesnev.trim()) errors.Hirdetesnev = "Hirdetés név szükséges!";
    if (!formData.Leiras.trim()) errors.Leiras = "A leírás szükséges!";
    if (!formData.Elerhetoseg || !/^\d{11}$/.test(formData.Elerhetoseg)) {
      errors.Elerhetoseg = "Érvényes telefonszámot adj meg (11 számjegy).";
    }
    if (!formData.Orszag.trim()) errors.Orszag = "Ország szükséges!";
    if (!formData.Varmegye.trim()) errors.Varmegye = "Vármegye szükséges!";
    if (!formData.Telepules.trim()) errors.Telepules = "Település szükséges!";
    if (!formData.Utcahazszam.trim()) errors.Utcahazszam = "Utca és házszám szükséges!";
    if (!formData.Tipus.trim()) errors.Tipus = "Típus szükséges! (Pl: lakás, ház)";
    if (!formData.Ar || isNaN(formData.price)) errors.Ar = "Helyes árat kell megadni!";
    if (!formData.KepURL) errors.KepURL = "Kép feltöltése kötelező!";
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const form = new FormData();
    form.append("Hirdetesnev", formData.Hirdetesnev);
    form.append("Leiras", formData.Leiras);
    form.append("Elerhetoseg", formData.Elerhetoseg);
    form.append("Orszag", formData.Orszag);
    form.append("Varmegye", formData.Varmegye);
    form.append("Telepules", formData.Telepules);
    form.append("Utcahazszam", formData.Utcahazszam);
    form.append("Tipus", formData.Tipus);
    form.append("Ar", formData.Ar);
    form.append("Gyerekbarat", formData.Gyerekbarat);
    form.append("Allatbarat", formData.Allatbarat);
    form.append("Kiadasidotartam", formData.Kiadasiidotartam);
    form.append("KepURL", formData.KepURL); // Kép feltöltése

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
            name="Hirdetesnev"
            required
            value={formData.Hirdetesnev}
            onChange={handleChange}
          />
          <label>Hirdetés név</label>
          {errors.Hirdetesnev && <p className="error-text">{errors.Hirdetesnev}</p>}
        </div>

        <div className="input-box">
          <textarea
            name="Leiras"
            required
            value={formData.Leiras}
            onChange={handleChange}
          />
          <label>Leírás</label>
          {errors.Leiras && <p className="error-text">{errors.Leiras}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="Elerhetoseg"
            value={formData.Elerhetoseg}
            onChange={handleChange}
            placeholder="Telefonszám"
            required
          />
          <label>Telefonszám</label>
          {errors.Elerhetoseg && <p className="error-text">{errors.Elerhetoseg}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="Orszag"
            value={formData.Orszag}
            onChange={handleChange}
            placeholder="Ország"
            required
          />
          <label>Ország</label>
          {errors.Orszag && <p className="error-text">{errors.Orszag}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="Varmegye"
            value={formData.Varmegye}
            onChange={handleChange}
            placeholder="Vármegye"
            required
          />
          <label>Vármegye</label>
          {errors.Varmegye && <p className="error-text">{errors.Varmegye}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="Telepules"
            value={formData.Telepules}
            onChange={handleChange}
            placeholder="Település"
            required
          />
          <label>Település</label>
          {errors.Telepules && <p className="error-text">{errors.Telepules}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="Utcahazszam"
            value={formData.Utcahazszam}
            onChange={handleChange}
            placeholder="Utca és házszám"
            required
          />
          <label>Utca és házszám</label>
          {errors.Utcahazszam && <p className="error-text">{errors.Utcahazszam}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="Tipus"
            value={formData.Tipus}
            onChange={handleChange}
            placeholder="Típus"
            required
          />
          <label>Típus</label>
          {errors.Tipus && <p className="error-text">{errors.Tipus}</p>}
        </div>

        <div className="input-box">
          <input
            type="decimal"
            name="Ar"
            value={formData.Ar}
            onChange={handleChange}
            placeholder="Ár"
            required
          />
          <label>Ár</label>
          {errors.Ar && <p className="error-text">{errors.Ar}</p>}
        </div>

        <div className="input-box">
          <input
            type="file"
            name="KepURL"
            accept="KepURL/*"
            onChange={handleChange}
            required
          />
          <label>Kép</label>
          {errors.KepURL && <p className="error-text">{errors.KepURL}</p>}
        </div>

        <div className="input-box">
          <input
            type="checkbox"
            name="gyerekbarat"
            checked={formData.Gyerekbarat}
            onChange={handleChange}
          />
          <label>Gyerek barát</label>
        </div>

        <div className="input-box">
          <input
            type="checkbox"
            name="Allatbarat"
            checked={formData.Allatbarat}
            onChange={handleChange}
          />
          <label>Állatbarát</label>
        </div>

        <div className="input-box">
          <input
            type="text"
            name="Kiadasidotartam"
            value={formData.Kiadasiidotartam}
            onChange={handleChange}
            placeholder="Kiadási időtartam"
          />
          <label>Kiadási időtartam</label>
        </div>

        <button type="submit" className="btn">Hirdetés felvétel</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
