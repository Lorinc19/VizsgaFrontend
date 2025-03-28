import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profil.css';
import axios from 'axios';
import Cardh from './Cardh';
import './Admin.css';

export default function Profil({ isLoggedIn, setIsLoggedIn }) {
    const [data, setData] = useState({});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    
  const [hird, sethird] = useState([])
  const [selectedBtn, setselectedBtn] = useState(null)
  const role = localStorage.getItem("role");
  



    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/belepes");
        }
    }, [isLoggedIn, navigate])

    useEffect(() => {
        if (!userId) {
            console.log(userId);
            setMessage("Hiba az adatok lekérése során.");
            console.error("Hiba az adatok lekérése során: nincs userId");
            
            return;
        }

        axios.get(`${process.env.REACT_APP_API_URL}/User/id?id=${userId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Hiba a felhasználói adatokat tartalmazó API hívás során:", error);
                setMessage("Hiba az adatok betöltése során.");
            });
    }, [userId]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        localStorage.removeItem("userId"); 
        setIsLoggedIn(false);
        navigate("/belepes");
    };

    const handleClick2 = async () => {
        axios.get(`${process.env.REACT_APP_API_URL}/Advertisement/All`)
          .then((res) => {
            sethird(res.data)
            console.log(res.data);
            setselectedBtn("Hird")
          })
    
      }
    return (
        <div className="profil-container">
            {message ? <h2 className='error-text'>{message}</h2> : (
                <div className="profil-box">
                    <div className="avatar-circle" title={`${data.vezeteknev} ${data.keresztnev}`}>
                        {data.vezeteknev?.charAt(0)}{data.keresztnev?.charAt(0)}
                    </div>
                    <h1><strong>Vezetéknév:</strong> {data.vezeteknev}</h1>
                    <h1><strong>Keresztnév:</strong> {data.keresztnev}</h1>
                    <h3>Felhasználónév: {data.userName}</h3>
                    <p><strong>Életkor:</strong> {data.kor}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <button className="alma1" onClick={handleClick2}>Hirdetéseim</button>
                    <button className='alma2' onClick={handleLogout}>Kijelentkezés <i className="bi bi-box-arrow-right"></i></button>
                
                <div className='tartalom'>
{selectedBtn ==="Hird" ? (
            <div className="szekcio">
              <h2>Hirdetések</h2>
                {
                  hird.map(hirdet => (<Cardh key={hirdet.id} hirdetes={hirdet} hirdgetfv={handleClick2} />))
                }
            </div>
          ) : null}
</div>
        </div>

      
            )}
        </div>
    );
}