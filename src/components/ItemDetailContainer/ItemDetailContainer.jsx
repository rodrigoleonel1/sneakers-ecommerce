import { Loader } from "../Loader/Loader";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { getProductsById } from '../../services/firebase/firestore';

export const ItemDetailContainer = ({ setCart }) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductsById(productId).then(product => {
            setProduct(product)
        }).catch(error => {
            toast.error(`${error}`)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return (<Loader />)
    }

    return (
        <section className='p-4 max-w-[1440px] min-h-[90vh] m-auto lg:flex lg:w-full gap-4 place-items-center'>
            <ItemDetail {...product} setCart={setCart} />
        </section>
    )
}
