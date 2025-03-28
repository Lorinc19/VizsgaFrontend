import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginRegister from './LoginRegister';
import Navbar from './Navbar';
import NewHousePost from './NewHousePost';
import Map from './Map';
import Lablec from './Lablec';
import Profil from './Profil';
import Hirdetes from './Hirdetes';
import Admin from './Admin';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    }
  }, [token])

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path='/belepes' element={<LoginRegister isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/regisztracio' element={<LoginRegister isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/ujhaz' element={<NewHousePost isLoggedIn={isLoggedIn} />} />
          <Route path='/map' element={<Map />} />
          <Route path='/profil' element={<Profil isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/hirdetes' element={<Hirdetes />} />
          <Route path='/admin' element={<Admin isLoggedIn={isLoggedIn} />} />
        </Routes>

      </BrowserRouter>
      <Lablec />
    </div>

  );
}


export default App;