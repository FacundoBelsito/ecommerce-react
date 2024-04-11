import React from "react"
import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0)
            setCount(count - 1)

    }
    return (
        <div className="p-4">
            <div className="flex justify-around text-2xl bg-slate-900 mb-2 rounded-md text-white" >
                <button classNameName="" onClick={restar}>-</button>
                <span>{count}</span>
                <button classNameName="" onClick={sumar}>+</button>
            </div>
            <button disable={stock === 0} onClick={()=>onAdd(count)} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount

