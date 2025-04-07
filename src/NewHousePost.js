import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewHousePost.css";
import { useNavigate } from "react-router-dom";

export default function NewHousePost({ isLoggedIn }) {


  const [file, setFile] = useState(null);

  const [isLoading, setIsLoading] = useState(false);


  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
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

  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate])

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };


  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Eltávolítjuk a "data:*/*;base64," előtagot
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!file) {
      setMessage("Kérjük válasszon ki egy képet!");
      setIsLoading(false);
      return;
    }



    try {
      const { ar, gyerekbarat, allatbarat, felhasznaloID, ...rest } = formData;

      const base64Image = await convertToBase64(file);

      const postData = {
        ...rest,
        ar: Number(formData.ar),
        gyerekbarat: Boolean(formData.gyerekbarat),
        allatbarat: Boolean(formData.allatbarat),
        felhasznaloID: "02005282-de1b-4307-81a9-5b77d8a23d80",
      };


      console.log(postData);



      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/Advertisement`, {
          createHirdetesDto: postData,
          base64File: base64Image,
          fileName: file.name,
          contentType: file.type

        }

      );
      setMessage("Sikeres felvitel!");
      console.log("Felvitel sikeres:", response.data);
      setFile(null);
    } catch (error) {
      setMessage("Hiba történt a felvitel során!");
      console.error(
        "Felvitel hiba:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="p-5 content bg-whitesmoke text-center ">
      <h2>Új hirdetés</h2>

      <form onSubmit={handleSubmit} className="new-house-form">
        <div className="form-grid">
          <div className="form-item">
            <label>Leírás:</label>
            <textarea
              type="text"
              name="leiras"
              required
              value={formData.leiras}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Elérhetőség:</label>
            <input
              type="text"
              name="elerhetoseg"
              required
              value={formData.elerhetoseg}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Hirdetés név:</label>
            <input
              type="text"
              name="hirdetesnev"
              required
              value={formData.hirdetesnev}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Kép feltöltés:</label>
            <input
              type="file"
              name="imageData"
              accept="image/*"
              required
              onChange={handleFileChange}

              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Ország:</label>
            <input
              type="text"
              name="orszag"
              required
              value={formData.orszag}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Vármegye:</label>
            <input
              type="text"
              name="varmegye"
              required
              value={formData.varmegye}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Település:</label>
            <input
              type="text"
              name="telepules"
              required
              value={formData.telepules}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Utca:</label>
            <input
              type="text"
              name="utca"
              required
              value={formData.utca}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Házszám:</label>
            <input
              type="text"
              name="hazszam"
              required
              value={formData.hazszam}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item">
            <label>Ház típusa:</label>
            <select
              name="tipus"
              value={formData.tipus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Válassz típust</option>
              <option value="lakás">Lakás</option>
              <option value="ház">Ház</option>
            </select>
          </div>

          <div className="form-item">
            <label>Ár:</label>
            <input
              type="number"
              name="ar"
              required
              value={formData.ar}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-item checkbox-group">
            <label className="custom-checkbox">
              <span>Gyerekbarát:</span>
              <input
                type="checkbox"
                name="gyerekbarat"
                checked={formData.gyerekbarat}
                onChange={handleChange}
              />

            </label>

            <label className="custom-checkbox">
              <span>Állatbarát:</span>
              <input
                type="checkbox"
                name="allatbarat"
                checked={formData.allatbarat}
                onChange={handleChange}
              />

            </label>
          </div>

          <div className="form-item">
            <label>
              Kiadás idő tartalma (hó):
            </label>
            <input
              type="text"
              name="kiadasiidotartam"
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