import { Loader } from "../Loader/Loader";
import { ItemList } from "../ItemList/ItemList";
import { Banner } from "../Banner/Banner";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { getProducts } from "../../services/firebase/firestore";
import { CategoriesContainer } from "../CategoriesContainer/CategoriesContainer";


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            toast.error(`${error}`)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    useEffect(() => {
        if (categoryId) {
            document.title = `${categoryId.toUpperCase()} | Sneakers Store`
        } else {
            document.title = `Home | Sneakers Store`
        }
    }, [categoryId])

    if (loading) {
        return (<Loader />)
    }

    

    return (
        <>
            <Banner/>
            {!categoryId && <CategoriesContainer/>}
            <section className="m-auto max-w-[1440px] mb-4">
                <h2 className="text-2xl text-center font-bold underline decoration-orange-500 underline-offset-4 mb-4">
                    <span className="text-orange-500">{categoryId ? categoryId.toUpperCase() : "ALL"} </span>PRODUCTS
                </h2>
                <ItemList products={products} />
            </section>
        </>
    )
}
