import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './Header'
import axios from 'axios'


export default function Home() {

  const [database, setdatabase] = useState([])

  useEffect(() => {

    Get()

  }, [])


  function Get() {
    fetch('https://localhost:7007/Hirdetés/Hirdetes')
      .then(response => response.json())
      .then(data => setdatabase(data))
  }


  return (
    <div>

      <Header />
      <div class="container content">
        <div class="row" id="adsContainer">


          <div className="row justify-content-center mx-auto col-md-8" style={{ paddingBottom: "20px", paddingTop: "10px" }}>
            {database.map(databases => (
              <Card felhasznalo={databases} getFv={Get} />

            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
