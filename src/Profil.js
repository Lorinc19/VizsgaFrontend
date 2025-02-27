import React, { useEffect, useState } from 'react'

export default function Profil({ id }) {

    const [data, setData] = useState([]);

    useEffect(() => {

    fetch(`https://localhost:7007/Felhasznaló/${id}`)
      .then(response => response.json()) // JSON formátumra alakítjuk
      .then(data => {
        setData(data); // Az adatokat beállítjuk a state-be
        
      })


    }, [id]);
  return (
    <div>
      
      <h1><strong>Vezetéknév:</strong> {data.Csaladnev}</h1>
      <h1><strong>Keresztnév:</strong> {data.Vezeteknev}</h1>
      <p><strong>Életkor:</strong> {data.Kor}</p>
      <p><strong>Email:</strong> {data.Email}</p>
      


    </div>
  )
}
