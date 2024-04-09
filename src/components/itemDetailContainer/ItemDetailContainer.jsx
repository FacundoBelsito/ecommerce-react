import { useEffect, useState } from "react"
import { getOneProduct } from "../../mock/productos"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../service/firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(false)
    const { itemId } = useParams()


    

    //FIREBASE

    useEffect(()=>{
        setCargando(true)
        const collectionProd = collection(db, "productos")
        const referenciaDoc = doc(collectionProd, itemId)

        getDoc(referenciaDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[itemId])

    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-2 ">

            {<ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer