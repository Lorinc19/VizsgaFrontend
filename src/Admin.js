import React, { use, useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';
import Carda from './Carda';
import Cardh from './Cardh';
import { useNavigate } from 'react-router-dom';


export default function Admin({isLoggedIn}) {

  //useState
  const [adminf, setadminf] = useState([])
  const [hird, sethird] = useState([])
  const [selectedBtn, setselectedBtn] = useState(null)
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  //useEffect
  useEffect(() => {
    if(!isLoggedIn || role !== "Admin"){
      navigate("/");
    }
  }, [role, isLoggedIn, navigate])



  //Function

  const handleClick = async () => {
    axios.get(`${process.env.REACT_APP_API_URL}/User/AdminUser`)
      .then((res) => {
        setadminf(res.data)
        console.log(res.data);
        setselectedBtn("Felh");
      })

  }

  const handleClick2 = async () => {
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
        <button className="gomb" onClick={handleClick}>Felhasználók</button>
        <button className="gomb" onClick={handleClick2}>Hirdetések</button>
        
      </div>

      <div className="tartalom">

        
          {selectedBtn === "Felh" ? (
            <div className="szekcio">
              <h2>Felhasználók</h2>
              
                {
                  adminf.map(adminfs => (<Carda key={adminfs.id} felhasz={adminfs} admingetfv={handleClick} />))

                }
            </div>
          ) : selectedBtn ==="Hird" ? (
            <div className="szekcio">
              <h2>Hirdetések</h2>
                {
                  hird.map(hirdet => (<Cardh key={hirdet.id} hirdetes={hirdet} hirdgetfv={handleClick2} />))
                }
            </div>
          ) : null}

        </div>

      </div>
  );
};

