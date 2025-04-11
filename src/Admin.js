import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';
import Carda from './Carda';
import Cardh from './Cardh';
import { useNavigate } from 'react-router-dom';


export default function Admin({ isLoggedIn }) {

 
  const [adminf, setadminf] = useState([])
  const [hird, sethird] = useState([])
  const [selectedBtn, setselectedBtn] = useState(null)
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

 
  useEffect(() => {
    if (!isLoggedIn || role !== "Admin") {
      navigate("/");
    }
  }, [role, isLoggedIn, navigate])



  //Függvény a felhasználók adatainak lekérésére és megjelenítésére

  const handleClick = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/User/AdminUser`)
      .then((res) => {
        setadminf(res.data)
        console.log(res.data);
        setselectedBtn("Felh");
      })

  }
  // Függvény a hirdetések adatainak lekérésére és megjelenítésére

  const handleClick2 = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/Advertisement/All`)
      .then((res) => {
        sethird(res.data)
        console.log(res.data);
        setselectedBtn("Hird")
      })

  }

  return (
    <div className="admin-felület">
      <div className="gombok-tartó">
        <button className={`gomb ${selectedBtn === "Felh" ? "aktiv" : ""}`} onClick={handleClick}>Felhasználók</button>
        <button className={`gomb ${selectedBtn === "Hird" ? "aktiv" : ""}`} onClick={handleClick2}>Hirdetések</button>

      </div>

      <div className="tartalom">
        {selectedBtn === null && <p>Kérlek válassz egy lehetőséget fentről.</p>}

        {selectedBtn === "Felh" ? (
          <div className="szekcio">
            <h2>Felhasználók</h2>
            <div id='adminCards' className='row'>
              {
                adminf.map(adminfs => (<Carda key={adminfs.id} felhasz={adminfs} admingetfv={handleClick} />))

              }
            </div>
          </div>
        ) : selectedBtn === "Hird" ? (
          <div className="szekcio">
            <h2>Hirdetések</h2>
            <div id='adminCards' className='row'>
              {
                hird.map(hirdet => (<Cardh key={hirdet.id} hirdetes={hirdet} hirdgetfv={handleClick2} />))
              }
            </div>
          </div>
        ) : null}

      </div>

    </div>
  );
};
