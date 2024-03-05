import './CartWidget.css'
const CartWidget = () => {
    return (
        <div>
            <img className='cartWidget' src='./img/carrito.png' alt='carrito' />
            <span className='badge'>0</span>
        </div>
    )
}

export default CartWidget