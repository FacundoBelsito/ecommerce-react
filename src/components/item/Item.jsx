import {Link} from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-brown-300 shadow-md border border-black border-2">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={producto.imagen} alt={producto.name} />
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{producto.name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">${producto.precio}</span>
                    </p>
                </div>
                <Link to={`/item/${producto.id}`} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Ver detalle
                </Link>
            </div>
        </div>
    )
}

export default Item