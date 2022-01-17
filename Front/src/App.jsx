import React from 'react'
import Contenedor from './Components/Nav/Contenedor';
import Inicio from './Components/Inicio/inicio'
import Login from './Components/Sesion/Login'
import NewPartida from './Components/Partidas/NewPartida';
import './app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function app()  {
    return (
      <Router>
              <Contenedor/>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route path="/CrearPartida" element={<NewPartida/>}/>
          <Route path="/CargarPartida" element={<Inicio/>}/>
          <Route path="/CrearEnemigo" element={<Inicio/>}/>
          <Route path="/ListaEnemigos" element={<Inicio/>}/>
          <Route path="/CrearNPC" element={<Inicio/>}/>
          <Route path="/ListaNPC" element={<Inicio/>}/>
          <Route path="/MapaGeneral" element={<Inicio/>}/>
          <Route path="/Buscar" element={<Inicio/>}/>
          <Route path="/Login" element={<Login/>}/>

        </Routes>

      </Router>
    )
}

export default app