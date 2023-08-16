import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from '../../assets/cart.svg'

export const CartWidget = ({classname, handleClick}) => {
    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    return (
        <Link className={`${classname} flex`} to={'/cart'} onClick={handleClick}>
            <img className='w-[25px]' src={cart} alt='cart icon svg' />
            <span className='bg-orange-500 m-auto py-1 px-3 rounded-full'>{totalQuantity}</span>
        </Link>
    )
}
