import React from 'react'

export default function Card({ props }) {
  return (
    //kártyák
    <div class="card">

      <div class="image-box">

      </div>
      <div class="feljo">
        <h4>{props.felhasznalo.hirdetesnev}</h4>
        <h5>{props.felhasznalo.elerhetoseg}</h5>
        <p>Leírás: {props.felhasznalo.leiras}</p>

      </div>
    </div>
  )
}
