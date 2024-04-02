/* eslint-disable no-unused-vars */
import MainVideo from '../assets/video/main.mp4'
import { BannerImg } from '../components/BannerImg/BannerImg'
import { Hero } from '../components/Hero/Hero'
import { Places } from '../components/Places/Places'
import Poster from '../assets/cover-women.jpg';
import Poster2 from '../assets/travel-cover2.jpg';
import { Blogs } from './Blogs';
import { Banner } from '../components/Banner/Banner';
import { Testimonial } from '../components/Testimonial/Testimonial';
import { useState } from 'react';
import { Popup } from '../components/Popup/Popup';

export const Home = () => {

   const [orderPopup, setOrderPopup] = useState(false);
    
    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return(
        <div>
            <div className='relative h-[700px] w-full'>
                <video autoPlay loop muted className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]">
                    <source src={MainVideo} type='video/mp4'/>
                </video>
                <Hero/>
            </div>
            <Places handleOrderPopup={handleOrderPopup}/>
            <BannerImg img={Poster}/>
            <Blogs/>
            <BannerImg img={Poster2}/>
            <Testimonial/>
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

        </div>
    )
}