import React, { useState, useEffect }  from 'react'
import fire from '../firebase-config'
import 'firebase/auth'



export default function Autenticación()
{
	const [ email, setEmail ]             = useState('')
	const [ password, setPassword ]       = useState('')
	
	


	const crearCuenta = () => 
	{ 
		fire.auth().createUserWithEmailAndPassword( email, password )
		.then( data => 
		{
			console.log('Te has registrado exitosamente', data)
			verificarCuenta()
		})
		.catch( error => console.log(error.message))
	}



	const verificarCuenta = () =>
	{
		var user = fire.auth().currentUser

		user.sendEmailVerification()
		.then(() =>
		{
			console.log('enviar email')
		})
		.catch(error =>
		{
			console.log(error, 'Error al enviar email de verificación')
		})
	}



	const login = () => 
	{ 
		fire.auth().signInWithEmailAndPassword(email, password) 
		.then( ()=> console.log('Bienvenido'))
		.catch( error => console.log(error.message))
	}



	const logout = () => 
	{ 
		fire.auth().signOut() 
		.then(() => console.log('Sesión cerrada'))
		.catch(error => console.log(error.message))
	}

	



	useEffect(() => 
	{
	    fire.auth().onAuthStateChanged((user) =>
		{
			if(user)
			{
				console.log('NOMBRE:', user.displayName)
				console.log('EMAIL:', user.email)
				console.log('EMAIL VERIFICADO:', user.emailVerified)
				console.log('Objeto user:', user)
				document.getElementById('usuario').innerHTML = user.email + ' ' + user.emailVerified
			}
			else
			{
				console.log('No estás logueado')
				document.getElementById('usuario').innerHTML = 'No estás logueado'
			}
		})
	}, []);




	return(
		<div>
		<br/>
			<input type="text" 
				  name="email" 
				  placeholder="Email"
				  onChange={ (event)=> setEmail(event.target.value) }
			/><br/>
			<input type="password" 
				  name="password" 
				  placeholder="Contraseña"
				  onChange={ (event)=> setPassword(event.target.value) }
			/><br/><br/>
			<input type="submit" value="Crear cuenta" onClick={ crearCuenta }/><br/>
			<input type="submit" value="Entrar" onClick={ login }/><br/>
			<input type="submit" value="Cerrar sesión" onClick={ logout }/>
			<br/><br/>

			<p id="usuario"></p>
			
		</div>
	)
}