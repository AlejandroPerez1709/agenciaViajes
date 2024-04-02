import TravelImg from '../../assets/travelbox.png'
import {MdFlight} from 'react-icons/md';
import { MdOutlineLocalHotel} from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";


export const Banner = () => {

    return(
        <div className="min-h-[350px] bg-gray-100">
            <div className="min-h-[350px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Image Section */}
                        <div data-aos='zoom-in'>
                            <img src={TravelImg} alt="travel" className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover'/>
                        </div>
                        {/* Text content section */}
                        <div>
                            <h1 data-aos="fade-up" className='capitalize text-3xl font-bold sm:text-4xl'>explore all corners of the world</h1>
                            <p className=' text-sm text-gray-500 tracking-wide leading-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos laudantium quo cupiditate laborum autem fugiat acLorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos laudantium quo cupiditate laborum autem fugiat 
                            </p>
                            <div data-aos="zoom-in" className="grid grid-cols-2 gap-6 pt-5">
                                <div className='space-y-6'>
                                    <div className="flex items-center gap-4">
                                        <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                                        <p>Flight</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                                        <p>Hotel</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                                        <p>Wi-fi</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                                     <p>Foods</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}