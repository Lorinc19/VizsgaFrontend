import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Home() {

  const [database, setdatabase] = useState([])

  useEffect(() => {
    Get()
  
  }, [])
  
  function Get() {
    fetch('http://10.169.84.128:5160/Hirdetés/Hirdetes')
      .then(response => response.json())
      .then(data => setdatabase(data))
  }


  return (
    <div>
      <div className="container content">
        <div className="row" id="adsContainer">
          {
            //homes.map(home => (
            //  <div
            //    key={home.id}
            //    className="row justify-content-center mx-auto col-md-8"
            //    style={{ paddingBottom: "20px", paddingTop: "10px" }}
            //  >
            //    <Card id={home.id} home={home}/>
            //  </div>
            //))
            <div className="row justify-content-center mx-auto col-md-4" style={{ paddingBottom: "20px", paddingTop: "10px"}}>
            {database.map(databases => (
              <Card felhasznalo={databases} getFv={Get} />

            ))}
          </div>
          }  
        </div>
      </div>
    </div>
  );
}
