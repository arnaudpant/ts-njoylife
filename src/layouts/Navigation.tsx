import { NavLink } from "react-router-dom";
import NavbarLinks from "../types/NavbarLinks";
import { ReactNode } from "react";



const Navigation = () => {
    return (

        <nav className="hidden md:block space-x-4">
            {
                NavbarLinks.map((link, index:number): ReactNode => (
                    <NavLink to={link.link} className="text-action" key={index}>{link.title}</NavLink> 
                ))
            }
        </nav>
    );
};

export default Navigation;
