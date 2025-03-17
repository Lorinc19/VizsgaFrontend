import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="header">
            <h1>
        {["A", "l", "b", "i", "G", "o"].map((letter, index) => (
          <span key={index} className="jump" style={{ animationDelay: `${index * 0.2}s` }}>
            {letter}
          </span>
        ))}
      </h1>
      <ul className="topnav">
        <li>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            Kezdőlap
          </Link>
        </li>
        
        <li>
          <Link
            className={location.pathname === "/belepes" ? "active" : ""} to="/belepes">
            Bejelentkezés/Regisztráció
          </Link>
          </li>
          <li>

          <Link className={location.pathname === "/ujhaz" ? "active" : ""} to="/ujhaz">
            Új hirdetés feltöltése
          </Link>
          </li>
          <li>
          <Link className={location.pathname === "/map" ? "active" : ""} to="/map">
            terkep proba
          </Link>
          </li>
          <li>
          <Link className={(location.pathname === "/profil" || location.pathname === "/hirdetes") ? "active" : ""} to="/profil">
            Profil
          </Link>


        </li>
      </ul>
    </div>
  );
}
