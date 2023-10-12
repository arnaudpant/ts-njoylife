import SectionAbout from "../components/UI/sections/SectionAbout";
import SectionCabinet from "../components/UI/sections/SectionCabinet";
import SectionCallToAction from "../components/UI/sections/SectionCallToAction";
import SectionCoaching from "../components/UI/sections/SectionCoaching";
import SectionHome from "../components/UI/sections/SectionHome";
import SectionInfos from "../components/UI/sections/SectionInfos";
import SectionWhyMe from "../components/UI/sections/SectionWhyMe";

const Home: React.FC = () => {
    return (
        <>
            <SectionHome />
            <SectionCoaching />
            <SectionAbout />
            <SectionWhyMe />
            <SectionCabinet />
            <SectionCallToAction />
            <SectionInfos />
        </>
    );
};

export default Home;