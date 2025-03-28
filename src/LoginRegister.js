import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import './LoginRegister.css';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { BeatLoader, PacmanLoader } from "react-spinners";

export default function LoginRegister({isLoggedIn, setIsLoggedIn}) {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState({text: "", status: ""});
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

  useEffect(() => {
    if(isLoggedIn){
      navigate("/");
    }
  
  }, [isLoggedIn, navigate])
  
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

      const logData = {
        userName: formData.userName,
        password: formData.password
      }

      console.log("Bejelentkezés:", logData);
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Auth/Login`, logData);

        if(response.status !== 200) {
          throw new Error();
        }

        setMessage({text: response.data.message, status: "success"});
        console.log("Belépés sikeres:", response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.result.userName);
        localStorage.setItem("email", response.data.result.email);
        localStorage.setItem("role", jwtDecode(response.data.token).role);
        localStorage.setItem("userId", jwtDecode(response.data.token).sub);
        
        
        setTimeout(() => {
          setIsLoggedIn(true)
          navigate("/") // 2 másodperc várakozás, hogy megmutassuk a loading ikont
        }, 1000);
        

      } catch (error) {
        setMessage({text: "Hiba történt a belépés során!", status: "error"});
        console.error("Belépési hiba:", error.response?.data || error.message);
      }
    } else {
      

      const regData = {
        ...formData,
        kor: Number(formData.kor)
      }

      console.log("Regisztráció:", regData);

      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Auth/Register`, regData);
        
        setMessage({text: `${response.message} Jelentkezz be!`, status: "success"});
        console.log("Regisztráció sikeres:", response.data);
        setTimeout(() => {
          setIsLogin(true)
        }, 2000);
      } catch (error) {
        setMessage({text: "Hiba történt a regisztráció során!", status: "error"});
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
            {errors.userName && <p className="error-text">{errors.userName}</p>}
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
            
            <button type="button" className="alma2" onClick={() => setIsLogin(false)}>
              Regisztráció
            </button>
            </p>

            {message.status === "success" ? (
              <div className="message-box">
                <p className="success-text">{message.text}</p>
                <PacmanLoader color="#f9a825"/>
              </div>
            ) : message.status === "error" ? (
              <div className="message-box">
                  <p className="error-text">{message.text}</p>
            </div>
            ) : null}

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
            {errors.vezeteknev && <p className="error-text">{errors.vezeteknev}</p>}
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
            {errors.keresztnev && <p className="error-text">{errors.keresztnev}</p>}
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
            {errors.email && <p className="error-text">{errors.email}</p>}
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
          <div className="input-box">
            <input
              type="number"
              name="kor"
              required
              value={formData.kor}
              onChange={handleChange}
            />
            <label>Életkor</label>
            {errors.kor && <p className="error-text">{errors.kor}</p>}
          </div>
          
          <button type="submit" className="btn">Regisztráció</button>

          <p className="register-link">
            Már van felhasználód?{" "}
            <button type="button" className="alma2" onClick={() => setIsLogin(true)}>
              Bejelentkezés
            </button>
            </p>

            {message.status === "success" ? (
              <div className="message-box">
                <p className="success-text">{message.text}</p>
              </div>
            ) : message.status === "error" ? (
              <div className="message-box">
                  <p className="error-text">{message.text}</p>
              </div>
            ) : null}
        </form>
      </div>
    </div>
  );
}