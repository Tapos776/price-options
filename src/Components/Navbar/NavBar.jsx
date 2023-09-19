import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu ,GiLightSabers} from "react-icons/gi";
const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' }
    ];
    const [open ,setOpen] =useState(true)
    const handelClose =(open)=>{
        setOpen(open)
    }
    return (             
        <nav className="bg-yellow-500 p-5">
            <div className=" text-2xl md:hidden mx-6 mt-10  " onClick={()=>handelClose(!open)}>
                {
                    open ===true ?<GiLightSabers></GiLightSabers>  : <GiHamburgerMenu ></GiHamburgerMenu>
                }
            </div>

            <ul className={`md:flex gap-10 mx-12 mt-5 bg-yellow-500 md:static  rounded-lg ${open? "" : ' -ml-[450px] p-10'} duration-1000 absolute`}>
                {
                    routes.map((route) => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;