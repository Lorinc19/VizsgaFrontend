import React from 'react'
import Card from './Card'

export default function Home() {

  function Get() {
    fetch("url")
  }

  return (
    <div>
        <div class="header">
        <h1 >AlbiGo</h1>
        <ul class="topnav">
            <li><a class="active" href="./index.html">Kezdőlap</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="./login.html">Felhasználó</a></li>
        </ul>

    </div>

    <div class="container content">
        <div class="row" id="adsContainer">
        

            <div className="row justify-content-center mx-auto col-md-8" style={{paddingBottom: "20px", paddingTop: "10px"}}>
                <Card id={1}/>
            </div>

            
            <div className="row justify-content-center mx-auto col-md-8" style={{paddingBottom: "20px", paddingTop: "10px"}}>
                <Card id={2}/>
            </div>
            
            <div className="row justify-content-center mx-auto col-md-8" style={{paddingBottom: "20px", paddingTop: "10px"}}>
               <Card id={3}/>
            </div>
            <div className="row justify-content-center mx-auto col-md-8" style={{paddingBottom: "20px", paddingTop: "10px"}}>
               <Card id={4}/>
            </div>
     
        </div>
    </div>
    </div>
  )
}
