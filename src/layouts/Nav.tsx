import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="hidden md:block">
            <NavLink to="/home" className="text-action">Home</NavLink>   
            <NavLink to="/about" className="pl-2 text-action">About</NavLink>   
            <NavLink to="/contact" className="pl-2 text-action">Contact</NavLink>   
        </nav>
    );
};

export default Nav;