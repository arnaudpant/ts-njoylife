import { NavLink } from "react-router-dom";
import NavbarLinks from "../types/NavbarLinks";
import { ReactNode } from "react";
import Plumes from "../components/Plumes";

const NavMobile = () => {
    return (

        <nav className="absolute left-0 top-0 flex flex-col bg-primairevar w-full h-auto text-center p-2 z-30 shadow-xl">
            <h2 className="text-3xl pt-1">NATUROPATHE</h2>
            <img src="./navbar/navbar-joelle.png" alt="Portrait Joelle" className="w-40 rounded-full bg-secondaire mx-auto my-4" />
            <h2 className="text-4xl font-semibold pb-8">Joëlle Corda</h2>
            <div className="flex flex-col mb-8">
                {
                    NavbarLinks.map((link, index: number): ReactNode => (
                        <NavLink to={link.link} className="text-action text-2xl pb-4" key={index}>{link.title}</NavLink>
                    ))
                }
            <Plumes height={48} width={48} />
            </div>
        </nav>
    );
};

export default NavMobile;