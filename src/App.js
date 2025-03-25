import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginRegister from './LoginRegister';
import Navbar from './Navbar';
import NewHousePost from './NewHousePost';
import Map from './Map';
import Naptarproba from './Naptarproba';
import Lablec from './Lablec';
import Profil from './Profil';
import Hirdetes from './Hirdetes';
import Admin from './Admin';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/belepes' element={<LoginRegister/>}/>
          <Route path='/regisztracio' element={<LoginRegister/>}/>
          <Route path='/ujhaz' element={<NewHousePost/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/profil' element={<Profil/>}/>
          <Route path='/hirdetes' element={<Hirdetes/>}/>
          <Route path='/admin' element={<Admin/>}/>

        </Routes>

        </BrowserRouter>
        <Lablec />
       
    </div>
    
  );
}

export default App;
