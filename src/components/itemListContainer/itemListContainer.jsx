import './itemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/productos'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'



//import { collection, getDocs, query, where } from 'firebase/firestore'
//import { db } from '../../services/firebase'


export const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)



    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter((prod) => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
            })
            .catch((error) => console.log(error, 'error'))
            .finally(()=> setLoading(false))
    }, [categoryId])

    if(loading){
       return(
           <Loader/>
       )
        
       
    }

    //FIREBASE!!!!
    //  useEffect(() => {
    //   setLoading(true)
    //  const productsCollection = collection(db, "productos")
    //getDocs(productsColletion)
    // .then((res)=>)

    // }, [])

    return (
        <div>
            {
                categoryId
                    ? <h1 className='pl-16'>{props.greeting} <span>{categoryId}</span></h1>
                    : <h1 className='pl-16'>{props.greeting}</h1>
            }
            <ItemList productos={productos} />


        </div>
    )
}


