import React, { useEffect, useState } from 'react';
import './Admin.css'; // CSS fájl importálása
import axios from 'axios';
import Carda from './Carda';
import Cardh from './Cardh';


export default function Admin() {

  //Usestat
  const [adminf, setadminf] = useState([])
  const [hird, sethird] = useState([])
  const [selectedBtn, setselectedBtn] = useState(null)

  //useeffect




  //Function

  const handleClick = async () => {
    axios.get('https://localhost:7007/User/Adminfelhaszn')
      .then((res) => {
        setadminf(res.data)
        console.log(res.data);
        setselectedBtn("Felh");
      })

  }

  const handleClick2 = async () => {
    axios.get('https://localhost:7007/Hirdetés/Hirdetes')
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
                  adminf.map(adminfs => (<Carda key={adminfs.id} felhasz={adminfs} admingetf={handleClick} />))

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


