import { Menu, XCircle } from 'lucide-react';
import Nav from './Nav';
import { useState } from 'react';

const Header = () => {
    const [toggleBurger, setToggleBurger] = useState(false)
    const handleToggle = () => setToggleBurger(!toggleBurger)

    return (
        <header className="bg-primaire fixed w-full h-14 flex md:flex-row items-center justify-between px-4">
            <button onClick={handleToggle}>
                {toggleBurger ? (<XCircle color='#7d3929' size={48} />) : (<Menu color='#7d3929' size={48} />)}
            </button>
            <Nav />
        </header>
    );
};

export default Header;