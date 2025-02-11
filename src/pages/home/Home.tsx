import SectionAccompagnement from "./SectionAccompagnement";
import SectionCallToAction from "../../components/UI/sections/SectionCallToAction";
import SectionCoaching from "./SectionCoaching";
import SectionEvenements from "./SectionEvenements";
import SectionHome from "./SectionHome";
import SectionInfos from "../../components/UI/sections/SectionInfos";
import SectionMassages from "./SectionMassages";
import { useEffect, useState } from "react";
import { ChevronUpCircle } from "lucide-react";
import SectionPlanning from "./SectionPlanning";
import { Helmet } from "react-helmet";
import SectionFaq from "./SectionFaq";
//import { createPortal } from "react-dom";
//import Modal from "../../components/UI/modal/Modal";

const Home: React.FC = () => {
    const [appBarStyle, setAppBarStyle] = useState(false);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    //const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (event: any): void => {
            const scrollHeight = event.currentTarget.scrollY;

            if (scrollHeight > 800) {
                setAppBarStyle(true);
            } else {
                setAppBarStyle(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowModal(true);
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Naturopathe sophrologue coach sportif 26300 Marches
                </title>
                <link
                    rel="canonical"
                    href="https://www.joelle-corda-naturopathe.fr/"
                />
                <meta
                    name="description"
                    content="Retrouvez votre poids de forme, gérez vos stress et retrouvez une activité physique avec Joelle Corda, naturopathe, sophrologue. 26300 Marches et Romans-sur-Isère"
                />
            </Helmet>
            <SectionHome />
            <SectionFaq />
            <SectionCoaching />
            <SectionAccompagnement />
            <SectionMassages />
            <SectionEvenements />
            <SectionPlanning />
            <SectionCallToAction />
            <SectionInfos map={true} />
            {appBarStyle && (
                <div
                    className="fixed right-4 bottom-4 animate-bounce cursor-pointer"
                    onClick={handleClick}
                >
                    <ChevronUpCircle className="text-tealG w-10 h-10" />
                </div>
            )}
            {/* {showModal &&
                createPortal(
                    <Modal setShowModal={setShowModal} />,
                    document.body
                )} */}
        </>
    );
};

export default Home;
