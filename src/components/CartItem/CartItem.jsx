import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const CartItem = ({ id, name, quantity, price, img }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <>
        <article className='bg-zinc-100 p-2 border border-zinc-300 rounded-md flex flex-col sm:flex-row sm:place-items-center sm:justify-between lg:w-[700px] sm:px-4'>
            <div className='flex gap-2 sm:gap-8'>
                <img className='rounded-md h-28 sm:h-40' src={img} alt={name} />
                <div className="sm:flex flex-col justify-center gap-2">
                    <Link className="hover:text-orange-500 font-semibold sm:text-xl" to={`/detail/${id}`}>
                        {name}
                    </Link>
                    <p>
                        Quantity: {quantity}
                    </p>
                    <p>
                        Unit price: ${price}
                    </p>
                    <p className="font-semibold">
                        Subtotal: ${price * quantity}
                    </p>
                </div>
            </div>
            <button className='bg-orange-500 text-white hover:bg-orange-600 p-2 rounded flex justify-center sm:text-xl' onClick={() => handleRemove(id)}>
                    <FaTrashAlt />
            </button>
        </article>
        </>
    )
}