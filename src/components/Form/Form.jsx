import Background from "../../assets/bg.webp"

export const Form = ({ name, email, phone, address, handleChange, createOrder }) => {

    return (
        <>
            <div className="p-4">
                <h2 className="text-2xl text-center font-bold underline decoration-orange-500 underline-offset-4 mb-4">
                    <span className="text-orange-500">CHECKOUT </span>FORM
                </h2>
                <p className="sm:w-[700px] sm:m-auto">Complete the form with the information requested below in the corresponding fields, with them we will create the purchase order and you will be able to view it.</p>
            </div>
            <form className='flex flex-col gap-4 p-4 text-white mb-6 md:py-16 bg-center bg-cover' onSubmit={createOrder} style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${Background})` }}>
                <div className="flex flex-col sm:w-[700px] sm:m-auto">
                    <span>Name:</span>
                    <input className="rounded p-2 border border-orange-500 placeholder:italic bg-black bg-opacity-70" type='text' name='name' placeholder='Enter your name' value={name} onChange={handleChange} required />
                </div>

                <div className="flex flex-col sm:w-[700px] sm:m-auto">
                    <span>Email:</span>
                    <input className="rounded p-2 border border-orange-500 placeholder:italic bg-black bg-opacity-70" type='email' name='email' placeholder='Enter your email' value={email} onChange={handleChange} required />
                </div>

                <div className="flex flex-col sm:w-[700px] sm:m-auto">
                    <span>Phone:</span>
                    <input className="rounded p-2 border border-orange-500 placeholder:italic bg-black bg-opacity-70" type='number' name='phone' placeholder='Enter your phone' value={phone} onChange={handleChange} min={0} minLength={10} required />
                </div>

                <div className="flex flex-col sm:w-[700px] sm:m-auto">
                    <span>Adrress:</span>
                    <input className="rounded p-2 border border-orange-500 placeholder:italic bg-black bg-opacity-70" type='text' name='address' placeholder='Enter your address' value={address} onChange={handleChange} required />
                </div>


                <button type='submit' className='bg-orange-500 hover:bg-orange-600 rounded py-2 sm:w-[700px] sm:m-auto'>Finalize purchase</button>
            </form>
        </>
    )
}

