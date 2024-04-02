/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const links = [
    {
      id: 1,
      title: "Inicio",
      link: "/",
      
    },
    {
      id: 2,
      title: "Acerca",
      link: "/about",
      
    },
    {
      id: 3,
      title: "Blogs",
      link: "/blogs",
     
    },
    {
      id: 4,
      title: "Mejores Lugares",
      link: "/places",
     
    },
  ];
  


export const ResponsiveMenu = ({showMenu, setShowMenu}) => {

    return(
        <div className={`${showMenu? 'left-0': '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200  md:hidden rounded-r-xl shadow-md`}>
            <div className="Navbar__card">
                {/* Top Section */}
                <div>
                    <div className='flex items-center  gap-5'>
                        <FaUserCircle size={50}/>
                        <div className='text-gray-500'>
                            <h1>Hello User</h1>
                            <h1 className="text-sm text-slate-500">Premium User</h1>
                        </div>
                    </div>
                </div>
                {/* NavLinks Section */}
                <div className='mt-12 text-black'>
                    <ul className='space-y-4 text-xl' >
                        {
                            links.map(({id, title, link}) => (
                                <li key={id} className='hover:bg-primary px-3 rounded-xl hover:text-white pt-4'>
                                    <Link to={link} onClick={() => setShowMenu(false)} className='mb-5 inline-block'>
                                        {title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}