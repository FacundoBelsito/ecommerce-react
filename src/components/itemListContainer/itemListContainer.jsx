import './itemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/productos'
import ItemList from '../itemList/ItemList'

export const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then((res) => setProductos(res))
            .catch((error) => console.log(error, 'error'))
    }, [])

    return (
        <div>
            <h1 className='pl-16'>{props.greeting}</h1>
           
            <ItemList productos={productos}/>
            

        </div>
    )
}


