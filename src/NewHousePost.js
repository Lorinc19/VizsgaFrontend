import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function NewHousePost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    phone: "",
    country: "",
    county: "",
    town: "",
    streetNumber: "",
    type: "",
    price: "",
    mikiado: false,
    petFriendly: false,
    rentalDuration: "",
    image: null,
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

    if (!formData.title.trim()) errors.title = "A cím szükséges!";
    if (!formData.description.trim()) errors.description = "A leírás szükséges!";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Érvényes telefonszámot adj meg (10 számjegy).";
    }
    if (!formData.country.trim()) errors.country = "Ország szükséges!";
    if (!formData.county.trim()) errors.county = "Vármegye szükséges!";
    if (!formData.town.trim()) errors.town = "Település szükséges!";
    if (!formData.streetNumber.trim()) errors.streetNumber = "Utca és házszám szükséges!";
    if (!formData.type.trim()) errors.type = "Típus szükséges!";
    if (!formData.price || isNaN(formData.price)) errors.price = "Helyes árat kell megadni!";
    if (!formData.image) errors.image = "Kép feltöltése kötelező!";
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("phone", formData.phone);
    form.append("country", formData.country);
    form.append("county", formData.county);
    form.append("town", formData.town);
    form.append("streetNumber", formData.streetNumber);
    form.append("type", formData.type);
    form.append("price", formData.price);
    form.append("gyerekbarat", formData.gyerekbarat);
    form.append("petFriendly", formData.petFriendly);
    form.append("rentalDuration", formData.rentalDuration);
    form.append("image", formData.image); // Kép feltöltése

    try {
      const response = await axios.post("http://10.169.84.128:5160/Listing/Add", form, {
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
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
          />
          <label>Cím</label>
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        <div className="input-box">
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
          <label>Leírás</label>
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefonszám"
            required
          />
          <label>Telefonszám</label>
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Ország"
            required
          />
          <label>Ország</label>
          {errors.country && <p className="error-text">{errors.country}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="county"
            value={formData.county}
            onChange={handleChange}
            placeholder="Vármegye"
            required
          />
          <label>Vármegye</label>
          {errors.county && <p className="error-text">{errors.county}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleChange}
            placeholder="Település"
            required
          />
          <label>Település</label>
          {errors.town && <p className="error-text">{errors.town}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="streetNumber"
            value={formData.streetNumber}
            onChange={handleChange}
            placeholder="Utca és házszám"
            required
          />
          <label>Utca és házszám</label>
          {errors.streetNumber && <p className="error-text">{errors.streetNumber}</p>}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Típus"
            required
          />
          <label>Típus</label>
          {errors.type && <p className="error-text">{errors.type}</p>}
        </div>

        <div className="input-box">
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Ár"
            required
          />
          <label>Ár</label>
          {errors.price && <p className="error-text">{errors.price}</p>}
        </div>

        <div className="input-box">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
          <label>Kép</label>
          {errors.image && <p className="error-text">{errors.image}</p>}
        </div>

        <div className="input-box">
          <input
            type="checkbox"
            name="gyerekbarat"
            checked={formData.mikiado}
            onChange={handleChange}
          />
          <label>Gyerek barát</label>
        </div>

        <div className="input-box">
          <input
            type="checkbox"
            name="petFriendly"
            checked={formData.petFriendly}
            onChange={handleChange}
          />
          <label>Állatbarát</label>
        </div>

        <div className="input-box">
          <input
            type="text"
            name="rentalDuration"
            value={formData.rentalDuration}
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
