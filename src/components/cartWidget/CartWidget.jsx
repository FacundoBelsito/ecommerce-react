import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'
const CartWidget = ({ counter }) => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <div>
            <img className='cartWidget' src='./img/carrito.png' alt='carrito' />
            {cartQuantity() > 0 && <span className='badge'>{cartQuantity()}</span>}
        </div>
    )
}

export default CartWidget

