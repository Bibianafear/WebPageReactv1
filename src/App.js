import logo from './logo.svg';
import './App.css';

import Home from './componentes/home/Home';
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';


import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
    <div> 
    <Routes>

        <Route path='/home' element={<Home />} />


      </Routes>
 
      </div>
  );
}

export default App;
