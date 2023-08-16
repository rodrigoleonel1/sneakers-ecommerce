import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import Cart from "../../assets/cart.svg"

export const ItemDetail = ({ id, free_shipping, name, img, category, description, price, stock }) => {

    useEffect(() => {
        document.title = `${name} | Sneakers Store` // eslint-disable-next-line
    }, [])

    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, img, name, price, quantity
        }
        addItem(productToAdd)
    }

    const productAddedQuantity = getProductQuantity(id)

    return (
        <>
            <img className="lg:max-w-[50%]" src={img} alt={name} />
            <div className='flex flex-col gap-2'>
                <Link className='uppercase text-orange-500 font-semibold hover:text-orange-600' to={`/category/${category}`}>
                    {category}
                </Link>
                <h1 className='font-bold text-lg lg:text-3xl'>{name}</h1>
                {free_shipping 
                ? <div className='flex gap-2 place-items-center'><h3 className='text-2xl font-bold'>${price}</h3><span className='bg-orange-100 px-2 text-orange-500 font-semibold'>FREE SHIPPING</span> </div>
                : <h3 className='text-2xl font-bold' >${price}</h3>}
                <p>{description}</p>
                <h4 className='font-bold'>Stock: {stock}</h4>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity} />
                    ) : (
                        <div className='flex gap-2'>
                            <Link className='bg-orange-500 text-white hover:bg-orange-600 flex place-items-center gap-2 py-2 px-4 rounded' to='/cart'>
                            <img src={Cart} alt='cart'/>See cart
                                </Link>
                            <Link className='bg-orange-500 text-white hover:bg-orange-600 flex place-items-center gap-2 py-2 px-4 rounded' to='/'>Keep buying</Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}
