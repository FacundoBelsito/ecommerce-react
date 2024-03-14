import { useEffect, useState } from "react"
import { getOneProduct } from "../../mock/productos"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {itemId} = useParams()


    getOneProduct(itemId)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
    useEffect(() => {

    }, [])
    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-2 ">

            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer