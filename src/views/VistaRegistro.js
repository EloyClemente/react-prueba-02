import React, { useState }  from 'react'
import fire from '../firebase-config'



export default function Registro()
{
	const [ email, setEmail ]       = useState('')
	const [ password, setPassword ] = useState('')


	const crearCuenta = async ()=> 
	{ 
		await fire.auth().createUserWithEmailAndPassword( email, password )
		.then( data => console.log('Te has registrado exitosamente', data))
		.catch( error => console.log(error.message))
	}




	return(
		<div>
			<input type="text" 
				  name="email" 
				  placeholder="Email"
				  onChange={ (event)=> setEmail(event.target.value) }
			/>
			<input type="password" 
				  name="password" 
				  placeholder="Contraseña"
				  onChange={ (event)=> setPassword(event.target.value) }
			/>
			<input type="submit" value="Crear cuenta" onClick={ crearCuenta }/>
		</div>
	)
}
