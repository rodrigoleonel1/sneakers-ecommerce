import { Categories } from "../Categories/Categories"

export const CategoriesContainer = () =>{
    return (
        <section>
            <h2 className="text-2xl text-center font-bold underline decoration-orange-500 underline-offset-4 mb-2">
            <span className="text-orange-500">ALL </span>CATEGORIES
            </h2>
            <article className="m-auto max-w-[1440px] p-2 grid gap-2 mb-2 sm:grid-cols-2 lg:grid-cols-3" >
            <Categories/>
            </article>
        </section>
    )
}