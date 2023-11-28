import SectionAccompagnement from "../components/UI/sections/SectionAccompagnement";
import SectionCallToAction from "../components/UI/sections/SectionCallToAction";
import SectionCoaching from "../components/UI/sections/SectionCoaching";
import SectionEvenements from "../components/UI/sections/SectionEvenements";
import SectionHome from "../components/UI/sections/SectionHome";
import SectionInfos from "../components/UI/sections/SectionInfos";
import SectionMassages from "../components/UI/sections/SectionMassages";

const Home: React.FC = () => {
    return (
        <>
            <SectionHome />
            <SectionCoaching />
            <SectionAccompagnement />
            <SectionMassages />
            <SectionEvenements />
            <SectionCallToAction />
            <SectionInfos />
        </>
    );
};

export default Home;