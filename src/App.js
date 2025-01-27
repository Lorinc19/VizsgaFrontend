import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './News';
import Login from './Login';

function App() {
  return (
    <div>
        <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hirek" element={<News />} />
          <Route path='/belepes' element={<Login/>}/>
          <Route path='/regisztracio' element={<Login/>}/>
        </Routes>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
