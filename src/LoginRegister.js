import React, { useState } from "react";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.username.trim()) errors.username = "Felhasználónév szükséges!";
    if (!isLogin && !formData.email.includes("@")) errors.email = "Érvénytelen email!";
    if (formData.password.length < 6) errors.password = "A jelszónak legalább 6 karakter hosszúnak kell lennie!";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isLogin) {
      console.log("Bejelentkezés:", formData);
    } else {
      console.log("Regisztráció:", formData);
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
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <label>Felhasználónév</label>
            {errors.username && <p className="error-text">{errors.username}</p>}
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
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <label>Felhasználónév</label>
            {errors.username && <p className="error-text">{errors.username}</p>}
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
