import { Menu, XCircle } from 'lucide-react';
import { useState } from 'react';
import Navigation from './Navigation';
import NavMobile from './NavMobile';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { NavLink } from 'react-router-dom';
>>>>>>> c1d1d2cc70ca69ee9182f898b479cb0689e840a3


const Header = () => {
    const [toggleBurger, setToggleBurger] = useState(false)
    const handleToggle = () => setToggleBurger(!toggleBurger)

    return (
        <>
            <button onClick={handleToggle} className='absolute md:hidden z-50 top-2 left-2'>
                {toggleBurger ? (<XCircle color='#7d3929' size={48} />) : (<Menu color='#7d3929' size={48} />)}
            </button>
            <header className="bg-secondaire relative w-full h-14 hidden md:flex md:flex-row items-center md:justify-between px-4 z-40 shadow-md">
<<<<<<< HEAD
                <Link to="/"><span className='text-3xl text-blanc font-bold cursor-pointer'>Joëlle CORDA</span></Link>
=======

                <NavLink to="/" className="text-blanc"><p className='text-4xl font-bold text-blanc pl-10'>Jo&euml;lle Corda</p></NavLink>
>>>>>>> c1d1d2cc70ca69ee9182f898b479cb0689e840a3
                <Navigation />
            </header>
            {toggleBurger && <NavMobile />}

        </>
    );
};

export default Header;