import { Navbar } from "../Navbar/Navbar.jsx"
import { Link } from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget.jsx"

export const Header = () =>{
    return(
        <header className="bg-zinc-900 text-white h-[75px] flex place-content-between items-center px-8 lg:px-20 sticky top-0">
            <Link className="font-black text-3xl tracking-tighter hover:text-orange-500 hover:cursor-pointer" to={'/'}>
                sneakers
                <span className="text-orange-500">
                    .
                </span>
            </Link>
            <Navbar/>
            <CartWidget classname='hidden md:flex'/>
        </header>
    )
}