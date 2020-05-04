import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import fire from './firebase-config'
import { AuthProvider } from './components/AuthProvider' 

import Navegacion from './components/Navegacion/Navegacion'
import VistaInicio from './views/VistaInicio'
import VistaAutenticacion from './views/VistaAutenticacion'
import VistaCurso from './views/VistaCurso'
import VistaContacto from './views/VistaContacto'
import VistaPrivada from './views/VistaPrivada'
import RutaPrivada from './components/RutaPrivada'


function App() {
      return (
          <AuthProvider>
            <BrowserRouter>
                  <div className="App">

                        <Navegacion/>

                        <Switch>
                              <Route path="/react-prueba-02/inicio"        component={ VistaInicio } />  
                              <Route path="/react-prueba-02/autenticacion" component={ VistaAutenticacion } />                          
                              <Route path="/react-prueba-02/curso"         component={ VistaCurso } />                          
                              <Route path="/react-prueba-02/contacto"      component={ VistaContacto } />        
                              <RutaPrivada path="/react-prueba-02/private" component={ VistaPrivada } />                        
                              <Redirect from="/react-prueba-02" to="/react-prueba-02/inicio" />        
                        </Switch>

                  </div>
            </BrowserRouter>
           </AuthProvider>
      );
}

export default App;

