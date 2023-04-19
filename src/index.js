import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //  Pegar Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Pegar Archivo Javascript de Bootstrap 4 


//import { HashRouter as BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


import Menu from './componentes/menu/Menu';
import Rout from './componentes/routes/Rout';
import Footer from './componentes/footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Rout />
      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
