import { X } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent = ({ setShowModal }: Props) => {
    return (
        <div className="bg-blanc rounded-lg p-6 max-w-[90%] max-h-[90vh] overflow-auto relative">
            <button
                className="absolute right-2 top-2 text-action"
                onClick={() => setShowModal(false)}
            >
                <X width={40} height={40} />
            </button>
            <div className="text-center">
                <h2 className="text-2xl pb-4 pt-4 text-secondaire">
                    Cercle de Pardon & Breathwork
                </h2>
                <p className="text-action text-lg">Dimanche 2 février 2025</p>
                <p className="text-action">De 10h à 13h</p>
                <p className="text-action">Cornas 07130</p>
            </div>
            <div>
                <h3 className="text-center text-xl p-4">
                    Atelier «de l’ombre à la lumière : une guérison du cœur»
                </h3>
                <p>
                    Venez prendre une douche du cœur en participant à un cercle
                    de Pardon.
                </p>
                <p>
                    Et trouver les trésors cachés en vous par la respiration
                    consciente Breathwork
                </p>
                <p className="text-center text-2xl p-4">Participation: 50€</p>
            </div>
            <div className="text-center">
                <h3>Réservation & infos :</h3>
                <p className="text-center text-2xl p-2 text-action">
                    06 51 48 68 95
                </p>
                <p>ou</p>
                <p className="text-center text-2xl p-2 text-action">
                    06 35 49 37 15
                </p>
            </div>
            <div className="text-center">
                <h3>Vos accompagnantes :</h3>
                <p className="pt-2">Joëlle Sophrologue, Coach holistique</p>
                <Link
                    className="text-secondaire"
                    to="https://melanie-dimino.fr"
                    target="_blank"
                >
                    Mélanie Facilitatrice en Breathwork
                </Link>
            </div>
        </div>
    );
};

export default ModalContent;
