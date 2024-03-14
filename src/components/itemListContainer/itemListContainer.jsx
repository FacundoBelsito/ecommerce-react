import './itemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/productos'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)



    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryId){
                    setProductos(res.filter ((prod)=> prod.category === categoryId))
                }else{
                    setProductos(res)
                }
            } )
            .catch((error) => console.log(error, 'error'))
    }, [categoryId])

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


