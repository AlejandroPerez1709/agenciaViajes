/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import {FaCaretDown} from "react-icons/fa"
import {HiMenuAlt1, HiMenuAlt3} from 'react-icons/hi'
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";

const links = [
  {
    id: 1,
    title: "Inicio",
    to: "/",
    x: "0",
    y: "0",
  },
  {
    id: 2,
    title: "Blogs",
    to: "/blogs",
    x: "0",
    y: "0",
  },
  {
    id: 3,
    title: "Mejores Lugares ",
    to: "/places",
    x: "0",
    y: "0",
  },
  {
    id: 4,
    title: "Acerca",
    to: "/about",
    x: "0",
    y: "0",
  },
];

const dropdown = [
    {
        id:1,
        title: "Servicios",
        link: "/#services"
    },
    {
        id:2,
        title: "Marcas",
        link: "/#mobile_brands"
    },
    {
        id:3,
        title: "Locaciones",
        link: "/#location"
    },
]

export const Navbar = ({ handleOrderPopup }) => {


  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-10">
      <div className="bg-gradient-to-r from-primary to-secondary text-white ">
       
        <div className="container  py-[2px] hidden sm:block">
          <div className="flex justify-between  ">
            <p className="capitalize">20% De descuento en su próxima agenda</p>
            <p className="capitalize">Celular 5583200205</p>
          </div>
        </div>
      </div>

      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={LogoImg} alt="logo" className="h-14" />
            </Link>
          </div>

          {/* NavLinks Section */}
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center ">
              {links.map(({ id, title, to, x, y }) => (
                <li key={id} className="py-4">
                  <NavLink
                    to={to}
                    onClick={() => window.scrollTo({ x }, { y })}
                    activeclassname="active"
                  >
                    {title}
                  </NavLink>
                </li>
              ))}

              {/* DropDown section */}
              <li className="relative cursor-pointer py-4 group bg-white h-[60px]">
                <div className="group dropdown flex items-center ">
                    <span>Enlaces</span>
                    <span> <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/></span>
                </div>
                <div className="absolute -top-14 -left-1 invisible group-hover:visible group-hover:translate-y-28  text-black w-[150px] shadow-md bg-white p-2 delay-300 -z-10 transition-all">
                    <ul>
                        {
                            dropdown.map(({id, title, link }) => (
                                <li key={id}>
                                    <a href={link} className="inline-block w-full rounded-md capitalize p-1 hover:bg-primary/20 ">{title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* Book NavLinks Section */}
          <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-500 text-white px-3 py-1 rounded-full" onClick={() => {
                  handleOrderPopup();
                }}>
                Reserve Hoy  
              </button>
              {/* Mobile Hamburguer Menu */}
              <div className="md:hidden block">
                  {
                    showMenu? (
                      <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>
                    )
                    :
                    (
                    <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>

                    ) 
                  }
              </div>
          </div>
          
        </div>
      </div>
      {/* Responsive Menu  */}
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
    </div>
  );
};
