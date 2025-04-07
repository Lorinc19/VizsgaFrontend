import React from "react";

export default function Card(props) {

  return (
    <div>
    <div className="card" onClick={function () {
      props.handleCardClick(props.felhasznalo)
    }} >
      {/* Ha a modál nem nyitva, akkor látszik a kártya */}

          <div className="image-box" >
            <img src={props.felhasznalo.imageData ? `data:image/jpeg;base64,${props.felhasznalo.imageData}` : "https://www.oc.hu/build/images/_sets/bauhaus-1500.webp"} alt="Image" />
          </div>
          <div className="feljo">
          <h4>{props.felhasznalo.hirdetesnev}</h4>
            <h5>{props.felhasznalo.elerhetoseg}</h5>
            <p>Leírás: {props.felhasznalo.leiras}</p>
          </div>
    </div>
    </div>
  );
}