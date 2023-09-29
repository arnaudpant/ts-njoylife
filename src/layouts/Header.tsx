import { Menu, XCircle } from 'lucide-react';
import { useState } from 'react';
import Navigation from './Navigation';










const Header = () => {
    const [toggleBurger, setToggleBurger] = useState(false)
    const handleToggle = () => setToggleBurger(!toggleBurger)

    return (
        <header className="bg-primaire fixed w-full h-14 flex md:flex-row items-center md:justify-end px-4">
            <button onClick={handleToggle} className='md:hidden'>
                {toggleBurger ? (<XCircle color='#7d3929' size={48} />) : (<Menu color='#7d3929' size={48} />)}
            </button>
            <Navigation />
        </header>
    );
};

export default Header;