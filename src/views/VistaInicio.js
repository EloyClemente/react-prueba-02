import React from 'react'
import app from "../firebase-config"


export default function VistaInicio()
{
	return(
		<div>
			<p>Página de inicio</p>
			<br/>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Odio quae expedita magnam tenetur maxime mollitia officiis facilis repellat 
				repellendus qui ut, natus id in eum, temporibus deleniti eos laboriosam quod?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Odio quae expedita magnam tenetur maxime mollitia officiis facilis repellat 
				repellendus qui ut, natus id in eum, temporibus deleniti eos laboriosam quod?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Odio quae expedita magnam tenetur maxime mollitia officiis facilis repellat 
				repellendus qui ut, natus id in eum, temporibus deleniti eos laboriosam quod?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Odio quae expedita magnam tenetur maxime mollitia officiis facilis repellat 
				repellendus qui ut, natus id in eum, temporibus deleniti eos laboriosam quod?
			</p>
			<br />

			<button onClick={ ()=> app.auth().signOut() }>Cerrar sesión</button>
			
		</div>
	)
}

