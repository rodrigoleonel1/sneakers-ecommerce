import Background from "../../assets/bg.webp"

export const Banner = () =>{
    return  (
        <section 
            style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${Background})`}}
            className="h-[40vh] mb-4 flex flex-col place-items-center justify-center bg-center bg-cover" >
            <h1 className="text-white text-3xl font-bold text-center md:text-5xl md:p-auto">
                DAYS CANT START WITHOUT <span className="text-orange-500">PERFECT SHOES</span>.
            </h1>
        </section>
    )
}