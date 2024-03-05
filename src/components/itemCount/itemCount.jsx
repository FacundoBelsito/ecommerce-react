import React from "react"
import { useState } from "react"

const ItemCount = ({stock}) =>{
    const [count, setCount] = useState(1)
    const sumar = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }
    const restar = () => {
        if(count > 0)
        setCount(count - 1)

    }
    return (
        <>
            <div>
                <button className="" onClick={restar}>-</button>
                <span>{count}</span>
                <button className="" onClick={sumar}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </>
    )
}

export default ItemCount