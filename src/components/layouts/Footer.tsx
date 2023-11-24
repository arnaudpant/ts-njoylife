import { useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    const [yearFooter] = useState(new Date().getFullYear())
    return (
        <footer className="bg-tealI text-tealA p-4 flex flex-col md:flex-row items-center justify-around gap-4">
            <div>
                <Link to="/cgu">Conditions d'utilisation</Link>
            </div>
            <div>
                <p>Site créé par <a href="https://kallavero.fr">Arnaud P.</a> &copy; {yearFooter}</p>
            </div>
        </footer>
    );
};

export default Footer;