//PAARA QUE MI APLICACION SE CONECTE A FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore" // traigo todos los metodos de firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL25fq6BBWwsKiVGxQEncmLh9eiWbn8fA",
  authDomain: "reactcoderprueba.firebaseapp.com",
  projectId: "reactcoderprueba",
  storageBucket: "reactcoderprueba.appspot.com",
  messagingSenderId: "43549273022",
  appId: "1:43549273022:web:fc5ab522bb4fa8f0e7e7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) //db = database

//npm install router dom = rutas que lleva aun componente diferente
//npm install bootstrap y pegar la importacion en index.js
//pegamos un link en index.html (<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />) son iconos
//instalar sweet alert en terminal y copiar en show.jsx