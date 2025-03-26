import React, { useState } from "react";
import axios from "axios";
import "./NewHousePost.css";

export default function NewHousePost() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    felhasznaloID: "",
    lLeiras: "",
    elerhetoseg: "",
    hirdetesnev: "",
    kepURL: "",
    orszag: "",
    varmegye: "",
    telepules: "",
    utca: "",
    hazszam: 1,
    tipus: "",
    ar: 0,
    gyerekbarat: false,
    allatbarat: false,
    kiadasiidotartam: "",
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

    if (!formData.felhasznaloID.trim())
      errors.felhasznaloID = "Vezetéknév szükséges!";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/Hirdetés/Post`,
        formData
      );
      setMessage("Sikeres regisztráció! Jelentkezz be.");
      console.log("Regisztráció sikeres:", response.data);
    } catch (error) {
      setMessage("Hiba történt a regisztráció során!");
      console.error(
        "Regisztrációs hiba:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="p-5 content bg-whitesmoke text-center ">
      <h2>Új hirdetés</h2>

      <form onSubmit={handleSubmit} className="new-house-form">
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Leírás:</label>
          <div className="col-sm-9">
            <textarea
              type="text"
              name="Leiras"
              required
              value={formData.leiras}
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
              name="Elerhetoseg"
              required
              value={formData.elerhetoseg}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Hirdetés név:</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="Hirdetesnev"
              required
              value={formData.hirdetesnev}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Kép URL:</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="KepURL"
              required
              value={formData.kepURL}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ország:</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="Orszag"
              required
              value={formData.orszag}
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
              name="Varmegye"
              required
              value={formData.varmegye}
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
              name="Telepules"
              required
              value={formData.telepules}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Utca:</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="Utca"
              required
              value={formData.utca}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Házszám:</label>
          <div className="col-sm-9">
            <input
              type="number"
              name="Hazszam"
              required
              min={1}
              value={formData.hazszam}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ház típusa:</label>
          <div className="col-sm-9">
            <select
              name="Tipus"
              value={formData.tipus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Válassz típust</option>
              <option value="lakás">Lakás</option>
              <option value="ház">Ház</option>
            </select>
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ár:</label>
          <div className="col-sm-9">
            <input
              type="number"
              name="Ar"
              required
              value={formData.ar}
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
              name="Gyerekbarat"
              checked={formData.gyerekbarat}
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
              name="Allatbarat"
              checked={formData.allatbarat}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">
            Kiadás idő tartalma (hó):
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="Kiadasiidotartam"
              required
              value={formData.kiadasiidotartam}
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
  );
}