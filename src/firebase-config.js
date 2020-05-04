import firebase from "firebase/app"


const config = {
	apiKey: "AIzaSyDAJB_GrNDAWoKkGI2ypFDF6jam3yIHWc8",
     authDomain: "react-prueba-02.firebaseapp.com",
     databaseURL: "https://react-prueba-02.firebaseio.com",
     projectId: "react-prueba-02",
     storageBucket: "react-prueba-02.appspot.com",
     messagingSenderId: "974060319509",
     appId: "1:974060319509:web:aa38c5614e870b8347af1c"
}

const fire = firebase.initializeApp(config)


export default fire