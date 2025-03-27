import axios from "axios";
import React, { useState } from "react";
import './App.css';
import './LoginRegister.css';
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    vezeteknev: "",
    keresztnev:"",
    email: "",
    password: "",
    kor:"",
    userName:""
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
            if (!formData.vezeteknev.trim()) errors.vezeteknev = "Vezetéknév szükséges!";
            if (!formData.keresztnev.trim()) errors.keresztnev = "Keresztnév szükséges!";
            if (!formData.email.includes("@")) errors.email = "Érvénytelen email!";
            if (!formData.kor || isNaN(formData.kor) || formData.kor < 18) errors.kor = "Minimum életkor 18 év!";
            if (formData.password.length < 6) errors.password = "A jelszónak legalább 6 karakter hosszúnak kell lennie!";
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
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Auth/Login`, {userName: formData.userName, password: formData.password});
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
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Auth/Register`, formData);
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
              name="userName"
              required
              value={formData.userName}
              onChange={handleChange}
            />
            <label>Felhasználónév</label>
            {errors.UserName && <p className="error-text">{errors.UserName}</p>}
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              required
              value={formData.password}
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
              name="userName"
              required 
              value={formData.userName} 
              onChange={handleChange}
            />
            <label>Felhasználó Név</label>
            
          </div>

          <div className="input-box">
            <input
              type="text"
              name="vezeteknev"
              required
              value={formData.vezeteknev}
              onChange={handleChange}
            />
            <label>Vezetéknév</label>
            {errors.Vezeteknev && <p className="error-text">{errors.Vezeteknev}</p>}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="keresztnev"
              required
              value={formData.keresztnev}
              onChange={handleChange}
            />
            <label>Keresztnév</label>
            {errors.Csaladnev && <p className="error-text">{errors.Csaladnev}</p>}
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
            {errors.Email && <p className="error-text">{errors.Email}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <label>Jelszó</label>
            {errors.Password && <p className="error-text">{errors.Password}</p>}
          </div>
          <div className="input-box">
            <input
              type="number"
              name="kor"
              required
              value={formData.kor}
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