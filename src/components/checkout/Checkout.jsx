import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../service/firebase";

const Checkout = () => {
    // const [name, setName] = useState('')
    // const [lastname, setLastname] = useState('')
    //const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, cartPriceTotal, clear } = useContext(CartContext)

    // const nameHandler = (e) => {
    //     setName(e.target.value)
    // }





    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }




    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name || !user.lastname || !user.email) {
            alert("Los campos son obligatorios")
        } else if (user.email !== validateEmail) {
            alert("Los Emails tienen que ser iguales")
        } else {
            let order = {
                user,
                items: cart,
                total: cartPriceTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, 'orders')
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }


    return (

        


            <div className="flex flex-col items-center gap-y-8">
                <h1>Completá con tus datos</h1>
                <form className="w-64" onSubmit={finalizarCompra} >
                    <div className="">
                        <label for="name" className="block text-gray-800 font-bold">Nombre:</label>
                        <input name="name" placeholder="Ingrese su nombre" type="text" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" onChange={userData} />
                    </div>

                    <div>
                        <label for="lastname" className="block text-gray-800 font-bold">Apellido</label>
                        <input name="lastname" placeholder="Ingrese su apellido" type="text" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" onChange={userData} />
                    </div>

                    <div>
                        <label for="email" className="block text-gray-800 font-bold">Email</label>
                        <input name="email" placeholder="Ingrese su Email" type="email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" onChange={userData} />
                    </div>

                    <div>
                        <label for="second-email" className="block text-gray-800 font-bold">Repita su Email</label>
                        <input name="second-email" placeholder="Repita su Email" type="email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" onChange={(e) => setValidateEmail(e.target.value)} />
                    </div>

                    <div>
                        <label for="phone" className="block text-gray-800 font-bold">Telefono</label>
                        <input name="phone" placeholder="Ingrese su telefono" type="tel" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" onChange={userData} />
                    </div>


                    <button type="submit" className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Enviar</button>
                </form>
            </div>
            )
}

            export default Checkout