import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {collection, getDocs, deleteDoc, doc,} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js" //getsDocs = trae los datos de la app

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Show = ()=>{

// 1 configurar los hooks

const [products,setProducts] = useState([])


//2 referenciar a la db de firestore

const productsCollection = collection (db, "dctoys") // conexion a la base de datos


//3 funcion para mostrar todos los documentos

const getProducts = async ()=>{
    const data = await getDocs (productsCollection) //data me trae los documentos de productCollection

    setProducts(data.doc.map((doc)=>({...doc.data(),id:doc.id})))
}

//4 funcion para eliminar un documento

const deleteProduct = async(id)=>{
const ProductDoc = doc(db, "dctoys", id)
await deleteDoc (ProductDoc)
getProducts()
}

// 4a funcion para la confirmacion de sweet alert

const confirmDelete = (id)=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProduct(id) //LLAMAMOS A LA ACCION ELIMINAR
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

//5 useEffect para actualizar la informacion cuando hago el llamado a la base de datos
 
useEffect(()=>{
   getProducts()
},[])

//6 devolver la vista


return(

    <div>
        <h1>Hola</h1>
    </div>



    )
}

export default Show