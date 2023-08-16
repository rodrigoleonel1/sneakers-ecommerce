import { CartItem } from '../CartItem/CartItem'
import { useContext, useEffect } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsFillCartXFill } from 'react-icons/bs'
import { FaTrashAlt, FaCheck } from 'react-icons/fa'

export const Cart = () => {

    useEffect(() => {
        document.title = `My cart | Sneakers Store`
    }, [])

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className='h-[90vh] flex flex-col place-items-center justify-center text-center'>
                <BsFillCartXFill className='text-5xl mb-4'/>
                <h1 className='text-3xl sm:text-4xl font-bold'>Your cart is empty.</h1>
                <Link className='text-orange-500 text-xl underline' to='/'>Keep buying</Link>
            </div>
        )
    }

    return (
        <section className='p-4 flex flex-col gap-4 min-h-[90vh]'>
            <h1 className="text-2xl text-center font-bold underline decoration-orange-500 underline-offset-4 mb-4"><span className="text-orange-500">My</span> cart</h1>
            <div className='mx-auto flex flex-col gap-2'>
                {cart.map(p => <CartItem key={p.id} {...p} />)}
            </div>
            <div className='flex flex-col place-items-center gap-2'>
                <p className='text-lg font-semibold'>Total price: ${total}</p>
                <div className='flex gap-2'>
                    <button onClick={() => clearCart()} className="bg-orange-500 text-white hover:bg-orange-600 flex place-items-center gap-2 py-2 px-4 rounded"><FaTrashAlt /> Clear cart</button>
                    <Link to='/checkout' className="bg-orange-500 text-white hover:bg-orange-600 flex place-items-center gap-2 py-2 px-4 rounded"><FaCheck /> Checkout</Link>
                </div>
            </div>
        </section>
    )
}