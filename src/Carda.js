import axios from 'axios'
import React from 'react'

export default function Carda(props) {

    function userDelete(id){
        axios.delete(`${process.env.REACT_APP_API_URL}/User/${id}`)
        .then(function(response){
            console.log(response);
            alert("Sikeres törlés");
            props.admingetfv();
        })
    }


    return (
        <div>
            <div className="card" style={{width :"18rem"}}>
                <div className="card-body">
                    <h4 className="card-title">Felhszanálónév: {props.felhasz.userName}</h4>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Keresztnév: {props.felhasz.keresztnev}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Vezeteknév: {props.felhasz.vezeteknev}</h6>
                    <p className="card-text">Kor: {props.felhasz.kor}</p>
                    <p className="card-text">Email: {props.felhasz.email}</p>
                    <button onClick={function(){
                        if(window.confirm("Biztos törölni szeretnéd?")){
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
