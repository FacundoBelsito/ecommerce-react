import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    //AGREGAR ITEMS AL CARRITO 
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            console.log('')
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }


    const clear = () => {
        setCart([])
    }
    //REMOVER ITEMS 
    const removeItem = (itemId) => {
        setCart(cart.filter((compra) => compra.id !== itemId))
    }

    const isInCart = (itemId) => {
        return cart.some((compra) => compra.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart }} >
            {children}
        </CartContext.Provider>
    )
}