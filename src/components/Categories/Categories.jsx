import { Link } from "react-router-dom"
import { CATEGORIES } from "../../constants.js"

export const Categories = () =>{
    return (
        <>
        {CATEGORIES.map(category => (
            <Link key={category.name} to={`category/${category.name.toLowerCase()}`}
            style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${category.img})`}}
            className="h-[100px] sm:h-[200px] bg-center bg-cover flex place-items-center justify-center">
                <p className="text-3xl font-medium text-white underline decoration-orange-500 underline-offset-4">
                    {category.name}
                    <span className="text-orange-500 font-black">.</span>
                </p>
            </Link>
        ))}    
        </>
    )
}