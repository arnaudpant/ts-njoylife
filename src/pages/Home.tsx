import SectionAbout from "../components/UI/sections/SectionAbout";
import SectionCabinet from "../components/UI/sections/SectionCabinet";
import SectionCallToAction from "../components/UI/sections/SectionCallToAction";
import SectionCoaching from "../components/UI/sections/SectionCoaching";
import SectionHome from "../components/UI/sections/SectionHome";
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
        </>
    );
};

export default Home;