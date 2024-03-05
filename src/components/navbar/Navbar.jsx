import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'
const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className='w-full flex justify-around items-center '>
                <a className='link text-2xl ' href="/"> FERRETERIA eNOVA</a>
                <div className='w-3/5 text-lg flex justify-between'>
                    <a href="/">HERRAMIENTAS</a>
                    <a href="/">MATERIALES</a>
                    <a href="/">HERRAMIENTRAS ELECTRICAS</a>
                    <a href="/">ELEMENTOS DE SEGURIDAD</a>

                </div>
                <CartWidget />

            </nav>
        </div>
    )
}

export default Navbar