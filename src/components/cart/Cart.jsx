import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartView from "../cartView/CartView";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className="my-8  ml-16">
            {!cart.length 
            ? <div>
                <h2>Tu carrito esta vacio</h2>
                <h4>Pasate por nuestro amplio stock de productos para poder comprar</h4>
                <Link className="flex items-center justify-center rounded-md bg-slate-900 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 my-3 w-40" to='/'>Ir a comprar!</Link>
                </div>
             : <CartView/>}
        </div>
    )
}

export default Cart
