import SectionAbout from "../components/UI/sections/SectionAbout";
import SectionCoaching from "../components/UI/sections/SectionCoaching";
import SectionHome from "../components/UI/sections/SectionHome";

const Home: React.FC = () => {
    return (
        <>
            <SectionHome />
            <SectionCoaching />
            <SectionAbout />
        </>
    );
};

export default Home;