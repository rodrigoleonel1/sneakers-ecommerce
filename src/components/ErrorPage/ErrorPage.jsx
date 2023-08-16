import { Link } from 'react-router-dom'
import ErrorImg from '../../assets/jordan2.png'

export const ErrorPage = () =>{
    return(
        <section className='p-4 flex flex-col h-[89vh] place-items-center justify-center gap-2'>
            <h1 className="text-2xl text-center font-bold underline decoration-orange-500 underline-offset-4 -mb-4 sm:-mb-12">
                <span className="text-orange-500">ERROR </span>404
            </h1>
            <img className='md:max-w-[700px]' src={ErrorImg} alt="" />
			<h2 className="font-semibold">¡Ups! Page not found</h2>
			<p>The page you are looking for does not exist. Maybe you misspelled the url or the page was removed.</p>
            <button>
                <Link to={'/'}>
                    <button className="bg-orange-500 hover:bg-orange-600 rounded py-2 px-4 text-white">
                        Home page
                    </button>
                </Link>
            </button>
        </section>
    )
}
