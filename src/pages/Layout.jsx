import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import { useState } from "react";
import { Popup } from "../components/Popup/Popup";

export const Layout = () => {

    const [orderPopup, setOrderPopup] = useState(false);
    
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };

    return(
        <>
            <Navbar handleOrderPopup={handleOrderPopup}/>
            <Outlet/>
            <Footer/>
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

        </>
    )
}