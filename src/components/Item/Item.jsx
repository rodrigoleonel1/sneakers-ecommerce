import { Link } from 'react-router-dom';

export const Item = ({product}) =>{
    return(
        <li className='bg-zinc-100 border border-zinc-200 rounded-md p-2 flex flex-col'>
            <img className='rounded-md' src={product.img} alt= {product.name}/>
            <p className='mt-2 truncate'>{product.name}</p>
            <footer className='flex flex-col justify-between'>
                <div className='sm:flex justify-between my-1'>
                    <p className='text-lg font-bold'>
                        ${product.price}
                    </p>
                    {product.free_shipping && 
                    <p className='bg-orange-100 px-2 text-orange-500 font-semibold'>
                        FREE SHIPPING
                    </p>}
                </div>
                <Link className='bg-orange-500 text-white rounded px-2 w-full text-center hover:bg-orange-600' to={`/detail/${product.id}`}>
                    See detail 
                </Link>
            </footer>
        </li>
    )
}
