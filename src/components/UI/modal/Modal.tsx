import ModalContent from "./ModalContent";


type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setShowModal }: Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-auto z-50" onClick={
            (e) => {e.stopPropagation()
                setShowModal(false)
            }
        }>
            <ModalContent setShowModal={setShowModal} />
        </div>
    );
};

export default Modal;
