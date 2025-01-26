import ModalContent from "./ModalContent";
import { X } from "lucide-react";

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setShowModal }: Props) => {
    return (
        <div className="fixed top-16 md:top-1/3 left-1/2 -translate-x-1/2 bg-blanc px-3 pt-8 pb-4 md:p-8 rounded-xl shadow-lg min-w-[300px] z-50">
            <button
                className="absolute right-2 top-2 text-action"
                onClick={() => setShowModal(false)}
            >
                <X width={40} height={40} />
            </button>
            <ModalContent />
        </div>
    );
};

export default Modal;
