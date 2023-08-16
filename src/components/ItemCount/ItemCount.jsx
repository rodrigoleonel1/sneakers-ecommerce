import Cart from "../../assets/cart.svg"
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const incrementCount = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrementCount = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="flex gap-2">
            <div className="border border-orange-500 rounded flex place-items-center gap-4 py-2 px-4">
                <button className='text-orange-500' onClick={decrementCount}>
                    <FaMinus/>
                </button>
                <p className='font-bold'>{quantity}</p>
                <button className='text-orange-500' onClick={incrementCount}>
                    <FaPlus/>
                </button>
            </div>
            <button className="bg-orange-500 text-white hover:bg-orange-600 flex place-items-center gap-2 py-2 px-4 rounded" onClick={() => onAdd(quantity)}>
                <img src={Cart} alt='cart' />
                <p>Add to cart</p>
            </button>
        </div>
    )
}
