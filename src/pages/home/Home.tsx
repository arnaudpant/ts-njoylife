import SectionAccompagnement from "./SectionAccompagnement";
import SectionCallToAction from "../../components/UI/sections/SectionCallToAction";
import SectionCoaching from "./SectionCoaching";
import SectionEvenements from "./SectionEvenements";
import SectionHome from "./SectionHome";
import SectionInfos from "../../components/UI/sections/SectionInfos";
import SectionMassages from "./SectionMassages";
import { useEffect, useState } from "react";
import { ChevronUpCircle } from 'lucide-react';

const Home: React.FC = () => {
    const [appBarStyle, setAppBarStyle] = useState(
        false
    )

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleScroll = (event: any): void => {
            const scrollHeight = event.currentTarget.scrollY

            if (scrollHeight > 800) {
                setAppBarStyle(
                    true
                )
            } else {
                setAppBarStyle(
                    false
                )
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <SectionHome />
            <SectionCoaching />
            <SectionAccompagnement />
            <SectionMassages />
            <SectionEvenements />
            <SectionCallToAction />
            <SectionInfos map={true} />
            {
                appBarStyle && (
                    <div className="fixed right-4 bottom-4 animate-bounce cursor-pointer" onClick={handleClick} >
                        <ChevronUpCircle className="text-tealG w-10 h-10" />
                    </div>
                )
            }
        </>
    );
};

export default Home;