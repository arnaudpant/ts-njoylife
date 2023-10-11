import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-secondaire p-4 flex flex-col md:flex-row items-center justify-around gap-4">
            <div>
                <Link to="/cgu" className="text-blanc">Conditions d'utilisation</Link>
            </div>
            <div>
            <p className="text-blanc">Site créé par <a href="https://kallavero.fr">Arnaud P.</a> &copy; 2023</p> 
            </div>
        </footer>
    );
};

export default Footer;