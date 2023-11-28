import SectionAbout from "../components/UI/sections/SectionAbout";
import SectionCabinet from "../components/UI/sections/SectionCabinet";
import SectionCallToAction from "../components/UI/sections/SectionCallToAction";
import SectionInfos from "../components/UI/sections/SectionInfos";
import SectionWhyMe from "../components/UI/sections/SectionWhyMe";


const About = () => {
    return (
        <>
            <SectionAbout />
            <SectionWhyMe />
            <SectionCabinet />
            <SectionCallToAction />
            <SectionInfos />
        </>
    );
};

export default About;