import './itemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/productos'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'




export const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)



    


    //FIREBASE!!!!


    useEffect(() => {
        setLoading(true)
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductos(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])


    if (loading) {
        return (
            <Loader />
        )


    }


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


