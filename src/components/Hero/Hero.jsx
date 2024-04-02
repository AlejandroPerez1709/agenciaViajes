import { useState } from "react"


export const Hero = () => {

const [priceValue, setPriceValue] = useState(150);



    return(
        <div className="bg-black/20 h-full ">
            <div className="h-full flex justify-center items-center p-4 bg-primary/10">
                <div className="container grid grid-cols-1 gap-4">
                    {/* Text Content Section  */}
                    <div data-aos="fade-up" className="text-white">
                        <p>Nuestros Paquetes </p>
                        <p data-aos="fade-up" data-aos-delay="400" className="font-bold text-3xl">
                        Busca Tu Destino
                        </p>
                    </div>
                    {/* Form Section */}
                    <div className="space-y-4 rounded-md bg-white p-4 relative" data-aos="fade-up" data-aos-delay="600">
                        <div className="grid grid-cols-1 sm:grid-cols-3 py-3 gap-4">
                            <div>
                                <label htmlFor="destination" className="opacity-70">
                                    Destino
                                </label>
                                <input type="text" name="destination" id="destination" placeholder="Dubai" className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2" />
                            </div>
                            <div>
                                <label htmlFor="destination" className="opacity-70">
                                    Fecha
                                </label>
                                <input type="date" name="destination" id="destination" className="w-full !placeholder-slate-400 bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2" />
                            </div>
                            <div>
                                <label htmlFor="destination" className="opacity-70 block">
                                    <div className="w-full flex justify-between items-center">
                                        <p>Precio Máximo </p>
                                        <p className="font-bold text-xl">${priceValue}</p>
                                    </div>
                                </label>
                                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                                    <input type="range" name="destination" id="destination" className="appearance-none w-full bg-gradient-to-r from-primary to-secondary my-2" min="150" max='1000' value={priceValue} step='10' onChange={(e) => setPriceValue(e.target.value)}/>
                                </div>

                            </div>                     
                        </div>
                        {/* Button Section */}
                        <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
                        Buscar Ahora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}