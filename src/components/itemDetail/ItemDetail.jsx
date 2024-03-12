import react from 'react'
import ItemCount from '../itemCount/ItemCount'
const ItemDetail = ({ producto }) => {
    return (
        <section className='flex items-center '>
            <div class="relative m-10 flex w-full max-w-xs flex-col items-center  rounded-lg bg-orange-300 shadow-md">

                <img class="object-cover" src={producto.imagen} alt={producto.name} />



                <h5 class="text-xl tracking-tight ">{producto.name}</h5>

                <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span class="text-3xl font-bold text-slate-900">${producto.precio}</span>
                    </p>

                </div>


                <ItemCount stock={producto.stock} />

            </div>
            <article className='w-[40%]  text-xl'>
            <h1 className="text-3xl my-8">DETALLE DEL PRODUCTO</h1>
                <p>{producto.descripcion}</p>
            </article>
        </section>
    )
}

export default ItemDetail

