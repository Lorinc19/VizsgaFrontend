import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginRegister from './LoginRegister';
import Navbar from './Navbar';
import NewHousePost from './NewHousePost';
import Map from './Map';
import Naptarproba from './Naptarproba';
import Lablec from './Lablec';
import Szuresfeltetelek from './Szuresfeltetelek';

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
          <Route path='/naptar' element={<Naptarproba/>}/>
          <Route path='/szures' element={<Szuresfeltetelek/>}/>
        </Routes>

        </BrowserRouter>
        <Lablec />  {/* Itt hívjuk meg a Footer komponenst */}
       
    </div>
    
  );
}

export default App;
