import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginRegister from './LoginRegister';
import Navbar from './Navbar';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/belepes' element={<LoginRegister/>}/>
          <Route path='/regisztracio' element={<LoginRegister/>}/>
        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
