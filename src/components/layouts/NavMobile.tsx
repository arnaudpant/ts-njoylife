import { useNavigate } from "react-router-dom";
import NavbarLinks from "../../types/NavbarLinks";
import { ReactNode } from "react";
import Plumes from "../UI/plumes/Plumes";
import { useToggleMenuBurger } from "../../context/ToggleMenuBurger";


const NavMobile = () => {

    const {setOpenBurger} = useToggleMenuBurger()
    const navigate = useNavigate()

    function handleToggle(link:string){
        console.log(link)
        setOpenBurger(false)
        navigate(`${link}`)
    }

    return (

        <nav className="absolute left-0 top-0 flex flex-col bg-primairevar w-full h-auto text-center p-2 z-30 shadow-xl">
            <h2 className="font-title text-3xl pt-1">NATUROPATHE</h2>
            <img src="./navbar/navbar-joelle.png" alt="Portrait Joelle" className="w-40 rounded-full bg-secondaire mx-auto my-4" />
            <h2 className="font-title text-4xl font-semibold pb-8">Joëlle Corda</h2>
            <div className="flex flex-col mb-8 items-center">
                {
                    NavbarLinks.map((link, index: number): ReactNode => (
                        <div key={index} onClick={()=>handleToggle(link.link)} className="text-tealL text-xl py-2 cursor-pointer">
                            {link.title}
                        </div>
                    ))
                }
                <Plumes />
            </div>
        </nav>
    );
};

export default NavMobile;