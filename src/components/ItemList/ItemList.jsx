import { Item } from '../Item/Item';

export const ItemList = ({ products }) => {
    return (
        <ul className='px-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </ul>
    )
}
