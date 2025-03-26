import axios from "axios";
import React, { useState } from "react";
import './App.css';
import './LoginRegister.css';
import { useNavigate } from "react-router-dom";


export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    Vezeteknev: "",
    Keresztnev:"",
    Email: "",
    Password: "",
    Kor:"",
    UserName:""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!isLogin) {
            if (!formData.Vezeteknev.trim()) errors.Vezeteknev = "Vezetéknév szükséges!";
            if (!formData.Keresztnev.trim()) errors.Csaladnev = "Keresztnév szükséges!";
            if (!formData.Email.includes("@")) errors.Email = "Érvénytelen email!";
            if (!formData.Kor || isNaN(formData.Kor) || formData.Kor < 18) errors.Kor = "Minimum életkor 18 év!";
            if (formData.Password.length < 6) errors.Password = "A jelszónak legalább 6 karakter hosszúnak kell lennie!";
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    if (isLogin) {
      console.log("Bejelentkezés:", formData);
      try {
        const response = await axios.post("https://localhost:7007/Auth/Login", {userName: formData.UserName, password: formData.Password});
        setMessage("Sikeres belépés!");
        console.log("Belépés sikeres", response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.result.userName);
        localStorage.setItem("email", response.data.result.email);
        navigate("/")

      } catch (error) {
        setMessage("Hiba történt a belépés során!");
        console.error("Belépési hiba:", error.response?.data || error.message);
      }
    } else {
      console.log("Regisztráció:", formData);
      try {
        const response = await axios.post("https://localhost:7007/Auth/Regisztráció", formData);
        setMessage("Sikeres regisztráció! Jelentkezz be.");
        console.log("Regisztráció sikeres:", response.data);
      } catch (error) {
        setMessage("Hiba történt a regisztráció során!");
        console.error("Regisztrációs hiba:", error.response?.data || error.message);
      }
    }
    
  };



  return (
    <div className={`wrapper ${isLogin ? "" : "active"}`}>
      <div className="form-box login">
        <h2 className="p-2">Bejelentkezés</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="UserName"
              required
              value={formData.UserName}
              onChange={handleChange}
            />
            <label>Felhasználónév</label>
            {errors.UserName && <p className="error-text">{errors.UserName}</p>}
          </div>

          <div className="input-box">
            <input
              type="password"
              name="Password"
              required
              value={formData.Password}
              onChange={handleChange}
            />
            <label>Jelszó</label>
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <button type="submit" className="btn">Bejelentkezés</button>

          <p className="register-link">
            Nincs felhasználód?{" "}
            
            <button type="button" className="toggle-btn" onClick={() => setIsLogin(false)}>
              Regisztráció
            </button>
          </p>
        </form>

      </div>




      <div className="form-box register">
        <h2 className="p-2">Regisztráció</h2>
        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <input
              type="text"
              name="UserName"
              required 
              value={formData.UserName} 
              onChange={handleChange}
            />
            <label>Felhasználó Név</label>
            
          </div>

          <div className="input-box">
            <input
              type="text"
              name="Vezeteknev"
              required
              value={formData.Vezeteknev}
              onChange={handleChange}
            />
            <label>Vezetéknév</label>
            {errors.Vezeteknev && <p className="error-text">{errors.Vezeteknev}</p>}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="Keresztnev"
              required
              value={formData.Csaladnev}
              onChange={handleChange}
            />
            <label>Keresztnév</label>
            {errors.Csaladnev && <p className="error-text">{errors.Csaladnev}</p>}
          </div>

          <div className="input-box">
            <input
              type="email"
              name="Email"
              required
              value={formData.Email}
              onChange={handleChange}
            />
            <label>Email</label>
            {errors.Email && <p className="error-text">{errors.Email}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              name="Password"
              required
              value={formData.Password}
              onChange={handleChange}
            />
            <label>Jelszó</label>
            {errors.Password && <p className="error-text">{errors.Password}</p>}
          </div>
          <div className="input-box">
            <input
              type="number"
              name="Kor"
              required
              value={formData.Kor}
              onChange={handleChange}
            />
            <label>Életkor</label>
            {errors.Kor && <p className="error-text">{errors.Kor}</p>}
          </div>
          
          <button type="submit" className="btn">Regisztráció</button>
          <p className="register-link">
            Már van felhasználód?{" "}
            <button type="button" className="toggle-btn" onClick={() => setIsLogin(true)}>
              Bejelentkezés
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}