import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className='w-full flex justify-around items-center '>
                <NavLink className='link text-2xl' to='/' > FERRETERIA eNOVA</NavLink>
                <div className='w-3/5 text-lg flex justify-between'>
                    <NavLink to='/categories/herramientas'>HERRAMIENTAS</NavLink>
                    <NavLink to ='/categories/materiales'>MATERIALES</NavLink>
                    <NavLink to ='/categories/herramientaselectricas'>HERRAMIENTRAS ELECTRICAS</NavLink>
                    <NavLink to ='/categories/elementosdeseguridad'>ELEMENTOS DE SEGURIDAD</NavLink>

                </div>
                <CartWidget />

            </nav>
        </div>
    )
}

export default Navbar