import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image-box">
        <img src="/haziko.png" />
      </div>
      <div className="feljo">
        <h4>{props.felhasznalo.hirdetesnev}</h4>
        <h5>{props.felhasznalo.elerhetoseg}</h5>
        <p>Leírás: {props.felhasznalo.leiras}</p>
      </div>
    </div>
  );
}
