import ModalContent from "./ModalContent";
import { X } from "lucide-react";

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setShowModal }: Props) => {
    return (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-blanc p-8 rounded-xl shadow-lg">
            <button
                className="absolute right-2 top-2 text-action"
                onClick={() => setShowModal(false)}
            >
                <X />
            </button>
            <ModalContent />
        </div>
    );
};

export default Modal;
