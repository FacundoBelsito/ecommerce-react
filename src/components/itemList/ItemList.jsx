import Item from "../item/Item"

const ItemList = ({ productos }) => {
    return (
        <div className="flex justify-around items-center flex-wrap mt-16 " >
        {productos.map((producto)=><Item key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList