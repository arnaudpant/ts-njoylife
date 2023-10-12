import { Adresses } from "../../types/Adresses";

const Adress = (Adress: Adresses) => {
    return (
        <div className="text-center p-2">
            <h3 className="text-xl">{Adress.jours}</h3>
            {
                Adress.heures && (<p>{Adress.heures}</p>)
            }
            {
                Adress.lieu && (<p>{Adress.lieu}</p>)
            }
            <p className="pt-2">{Adress.adresse}</p>
            <p>{Adress.ville}</p>
        </div>
    );
};

export default Adress;