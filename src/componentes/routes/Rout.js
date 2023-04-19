import React from 'react';
import Home from '../home/Home';
import Nosotros from '../nosotros/Nosotros';
import Servicios from '../servicios/Servicios';
import Contacto from '../contacto/Contacto';


import { Routes, Route } from 'react-router-dom';

//import Menu from '../menu/Menu';
//import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
//import Detalles from './detalles/Detalles'; // Este Componente lo crearé a continuación 
//import Footer from '../footer/Footer';
//import Home from './src/componentes/home/Home';
//import Nosotros from './src/componentes/nosotros/Nosotros';
//import Servicios from './src/componentes/servicios/Servicios';
//import Contacto from './src/componentes/contacto/Contacto';







class Rout extends React.Component {

	render() {

		return (

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/contacto' element={<Contacto />} />
				<Route path='/nosotros' element={<Nosotros />} />
				<Route path='/servicios' element={<Servicios />} />
				


			</Routes>

		)

	}

}

export default Rout;