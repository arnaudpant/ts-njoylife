import SectionAbout from "./SectionAbout";
import SectionCabinet from "./SectionCabinet";
import SectionCallToAction from "../../components/UI/sections/SectionCallToAction";
import SectionDiplomes from "./SectionDiplomes";
import SectionWhyMe from "./SectionWhyMe";


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