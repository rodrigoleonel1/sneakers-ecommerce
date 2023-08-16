import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BiMenu, BiX } from "react-icons/bi"
import { CartWidget } from '../CartWidget/CartWidget'
import { CATEGORIES } from '../../constants.js'

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(true)

    const handleClick = () => {
      setMenuOpen(!menuOpen)
    }

    return (
        <nav>
            <ul className={`${menuOpen ? 'hidden' : ''} absolute top-0 left-0 w-full h-screen p-5 bg-zinc-900 flex flex-col place-items-center justify-center gap-4 md:h-auto md:flex md:flex-row md:items-center md:gap-4 md:place-content-around md:relative md:p-0 md:mt-auto lg:gap-8`}>
                <BiX className={`absolute cursor-pointer text-4xl md:hidden top-5 right-8`} onClick={handleClick}></BiX>
                {CATEGORIES.map(category => (
                    <Link key={category.name} to={`category/${category.name.toLowerCase()}`} onClick={handleClick} className='hover:text-orange-500 hover:cursor-pointer -mb-1'>
                        {category.name}
                    </Link>
                ))}    
                <CartWidget handleClick={handleClick} classname='md:hidden'/>
            </ul>
            <div className={`cursor-pointer text-4xl md:hidden`} onClick={handleClick}>
               <BiMenu/>
            </div>
        </nav>
    )
}