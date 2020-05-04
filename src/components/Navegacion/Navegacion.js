import React from 'react'
import { NavLink } from "react-router-dom";
import './Navegacion.css'


const Navegacion = () =>
{
	return(
		<nav className="Navegacion">
			<ul>
				<li>
					<NavLink 
						to="/react-prueba-02/inicio" 
						activeClassName="link-activo">
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-02/autenticacion" 
						activeClassName="link-activo">
						Login/Registro
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-02/curso" 
						activeClassName="link-activo">
						Curso
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-02/contacto" 
						activeClassName="link-activo">
						Contacto
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-02/private" 
						activeClassName="link-activo">
						Zona privada
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navegacion