import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthProvider'



const RutaPrivada = ({ component: Component, ...rest }) => {

	const { currentUser } = useContext(AuthContext)

	return(
		<Route {...rest} 
		render={ props => currentUser ? 
			( <Component {...props} /> ) : 
			( <Redirect to="/react-prueba-02/inicio" /> ) } 
		/>
	)
}

export default RutaPrivada