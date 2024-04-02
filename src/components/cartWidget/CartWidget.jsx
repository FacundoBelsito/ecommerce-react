import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'
const CartWidget = ({counter}) => {
    const{cart}=useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <img className='cartWidget' src='./img/carrito.png' alt='carrito' />
           <span className='badge'>{cart.length}</span>
        </div>
    )
}

export default CartWidget

