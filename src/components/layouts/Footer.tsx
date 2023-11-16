import { useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    const [yearFooter] = useState(new Date().getFullYear())
    return (
        <footer className="bg-tealC p-4 flex flex-col md:flex-row items-center justify-around gap-4">
            <div>
                <Link to="/cgu" className="text-tealK">Conditions d'utilisation</Link>
            </div>
            <div>
                <p className="text-tealK">Site créé par <a href="https://kallavero.fr">Arnaud P.</a> &copy; {yearFooter}</p>
            </div>
        </footer>
    );
};

export default Footer;