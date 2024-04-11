import react, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = ({ producto }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [compra, setCompra] = useState(false)
    const { addItem } = useContext(CartContext)


    const onAdd = (cantidad) => {
        addItem(producto, cantidad)
        //setCantidadAgregada(cantidad)
        setCompra(true)

    }
    console.log(cantidadAgregada)
    return (
        <section className='flex items-center '>
            <div class="relative m-10 flex w-full max-w-xs flex-col items-center  rounded-lg bg-brown-300 shadow-md border border-black border-2">

                <img class="object-cover" src={producto.imagen} alt={producto.name} />



                <h5 class="text-xl tracking-tight ">{producto.name}</h5>

                <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span class="text-3xl font-bold text-slate-900">${producto.precio}</span>
                    </p>

                </div>

                {compra && <p>Agregaste {producto.name} en el carrito ✅</p>}

                {compra ? <Link to="/cart" className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700  my-3'>Ir al carrito</Link>
                    : <ItemCount stock={producto.stock} onAdd={onAdd} />}

            </div>
            <article className='w-[40%]  text-xl'>
                <h1 className="text-3xl my-8">DETALLE DEL PRODUCTO</h1>
                <p>{producto.descripcion}</p>
            </article>
        </section>
    )
}

export default ItemDetail

