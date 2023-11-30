import SectionAbout from "../components/UI/sections/SectionAbout";
import SectionCabinet from "../components/UI/sections/SectionCabinet";
import SectionCallToAction from "../components/UI/sections/SectionCallToAction";
import SectionDiplomes from "../components/UI/sections/SectionDiplomes";
import SectionWhyMe from "../components/UI/sections/SectionWhyMe";


const About = () => {
    return (
        <>
            <SectionAbout />
            <SectionDiplomes />
            <SectionWhyMe />
            <SectionCabinet />
            <SectionCallToAction />
        </>
    );
};

export default About;