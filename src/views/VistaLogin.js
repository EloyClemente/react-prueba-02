import React, { useState, useEffect }  from 'react'
import fire from '../firebase-config'
import 'firebase/auth'


export default function Registro()
{
	const [ email, setEmail ]       = useState('')
	const [ password, setPassword ] = useState('')


	const login = async ()=> 
	{ 
		await fire.auth().signInWithEmailAndPassword(email, password) 
		.then( ()=> console.log('Bienvenido'))
		.catch( error => console.log(error.message))

		fire.auth().onAuthStateChanged((user) =>
		{
			if(user)
			{
				console.log('USUARIO:', user.displayName)
				console.log('EMAIL:', user.email)
				console.log('EMAIL VERIFICADO:', user.emailVerified)
			}
			else
			{
				console.log('No estás logueado')
			}
		})
	}


	const logout = async ()=> 
	{ 
		await fire.auth().signOut() 
		.then(() => console.log('Sesión cerrada'))
		.catch(error => console.log(error.message))
	}


	useEffect(() => 
	{
	    console.log('USEEFFECT')
	});



	return(
		<div>
			<input type="text" 
				  name="email" 
				  placeholder="Email"				  onChange={ (event)=> setEmail(event.target.value) }
			/>
			<input type="password" 
				  name="password" 
				  placeholder="Contraseña"
				  onChange={ (event)=> setPassword(event.target.value) }
			/>
			<input type="submit" value="Entrar" onClick={ login }/>
			<input type="submit" value="Salir" onClick={ logout }/>
		</div>
	)
}
