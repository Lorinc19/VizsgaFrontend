import axios from 'axios';
import React from 'react'

export default function Cardh(props) {

    function userDelete(id){
        axios.delete(`${process.env.REACT_APP_API_URL}/Hirdetés/${id}`)
        .then(function(response){
            console.log(response);
            alert("Sikeres törlés");
            props.admingetfv();
        })
    }
    

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Hirdetésnév: {props.hirdetes.hirdetesnev}</h4>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Leiras: {props.hirdetes.leiras}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Elerhetőség: {props.hirdetes.elerhetoseg}</h6>
                    <p className="card-text">Ár: {props.hirdetes.ar}</p>
                    <p className="card-text">Orszag: {props.hirdetes.orszag}</p>
                    <p className="card-text">Vármegye: {props.hirdetes.varmegye}</p>
                    <p className="card-text">Település: {props.hirdetes.telepules}</p>
                    <p className="card-text">utca: {props.hirdetes.utcahazszam}</p>
                    <button onClick={function () {
                        if (window.confirm("Biztos törölni szeretnéd?")) {
                            userDelete(props.felhasz.Id)
                        }
                    }}>
                        <i className="bi bi-trash3"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
