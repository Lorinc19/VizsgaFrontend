import React from "react";

export default function Card(props) {

  return (
    <div className="card" onClick={props.onClick} >
      {/* Ha a modál nem nyitva, akkor látszik a kártya */}

          <div className="image-box" >
            <img src="https://www.oc.hu/build/images/_sets/bauhaus-1500.webp" alt="Image" />
          </div>
          <div className="feljo">
          <h4>{props.felhasznalo.hirdetesnev}</h4>
            <h5>{props.felhasznalo.elerhetoseg}</h5>
            <p>Leírás: {props.felhasznalo.leiras}</p>
          </div>
    </div>
  );
}