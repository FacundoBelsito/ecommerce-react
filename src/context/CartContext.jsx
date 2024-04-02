import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    //AGREGAR ITEMS AL CARRITO 
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const nuevoCarrito = cart.map((compra) => {
                if (compra.id === item.id) {
                    return { ...compra, quantity: compra.quantity + quantity }
                } else {
                    return compra
                }
            })
            setCart(nuevoCarrito)
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    //REMOVER TODOS ITEMS 
    const clear = () => {
        setCart([])
    }
    //REMOVER UN ITEM DEL CART USANDO SU ID 
    const removeItem = (itemId) => {
        setCart(cart.filter((compra) => compra.id !== itemId))
    }

    const isInCart = (itemId) => {
        return cart.some((compra) => compra.id === itemId)
    }
    //SUMA LA CANTIDAD TOTAL 
    const cartQuantity = () => {
        return cart.reduce((acc, compra) => acc += compra.quantity, 0)
    }

    //SUMA TOTAL A PAGAR 

    const cartPriceTotal = () => {
        return cart.reduce((acc, compra) => acc += (compra.precio * compra.quantity), 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal }} >
            {children}
        </CartContext.Provider>
    )
}