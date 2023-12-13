import SectionAccompagnement from "./SectionAccompagnement";
import SectionCallToAction from "../../components/UI/sections/SectionCallToAction";
import SectionCoaching from "./SectionCoaching";
import SectionEvenements from "./SectionEvenements";
import SectionHome from "./SectionHome";
import SectionInfos from "../../components/UI/sections/SectionInfos";
import SectionMassages from "./SectionMassages";

const Home: React.FC = () => {
    return (
        <>
            <SectionHome />
            <SectionCoaching />
            <SectionAccompagnement />
            <SectionMassages />
            <SectionEvenements />
            <SectionCallToAction />
            <SectionInfos map={true} />
        </>
    );
};

export default Home;