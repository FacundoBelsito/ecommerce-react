import './itemListContainer.css'
import React from 'react'
import { useState } from 'react'
import ItemCount from '../itemCount/itemCount'

export const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className='pl-16'>{props.greeting}</h1>
            <ItemCount stock={11}/>

        </div>
    )
}


