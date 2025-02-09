import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    return (
        //Navigáció
        <div>

            <ul className="topnav">
                <Link to={"/"}>
                    <li class="nav-item">
                        <a class="nav-link custom-link">Kezdőlap</a>
                    </li>
                </Link>
                <Link to={"/belepes"}>
                    <li class="nav-item">
                        <a class="nav-link  custom-link">Belépés</a>
                    </li>
                </Link>
            </ul>

        </div>
    )
}
