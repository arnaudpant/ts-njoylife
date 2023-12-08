import { Adresses } from "../../types/ListAdresses";

const Adress = (Adress: Adresses) => {
    return (
        <div itemScope itemType = "https://schema.org/PostalAddress" className="text-center p-2">
            <h3 className="text-xl pb-4 pt-1">{Adress.jours}</h3>
            {
                Adress.heures && (<p>{Adress.heures}</p>)
            }
            {
                Adress.lieu && (<p className="text-xl font-semibold">{Adress.lieu}</p>)
            }
            <p itemProp="streetAddress" className="pt-2">{Adress.adresse}</p>
            <p itemProp="addressLocality">{Adress.ville}</p>
        </div>
    );
};

export default Adress;