import SectionAbout from "../components/UI/sections/SectionAbout";
import SectionCabinet from "../components/UI/sections/SectionCabinet";
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
        </>
    );
};

export default Home;