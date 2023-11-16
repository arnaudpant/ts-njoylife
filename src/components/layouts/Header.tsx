import { Menu, XCircle } from 'lucide-react';
import { useState } from 'react';
import Navigation from './Navigation';
import NavMobile from './NavMobile';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [toggleBurger, setToggleBurger] = useState(false)
    const handleToggle = () => setToggleBurger(!toggleBurger)

    return (
        <>
            <button onClick={handleToggle} className='absolute md:hidden z-50 top-2 left-2'>
                {toggleBurger ? (<XCircle color='#7d3929' size={48} />) : (<Menu color='#7d3929' size={48} />)}
            </button>
            <header className="bg-tealI relative w-full h-14 hidden md:flex md:flex-row items-center md:justify-between px-4 z-40 shadow-md">

                <NavLink to="/" className="text-blanc"><p className='text-4xl font-bold text-tealA pl-10'>Jo&euml;lle Corda</p></NavLink>
                <Navigation />
            </header>
            {toggleBurger && <NavMobile />}

        </>
    );
};

export default Header;