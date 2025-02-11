import SectionAbout from "./SectionAbout";
import SectionCabinet from "./SectionCabinet";
import SectionCallToAction from "../../components/UI/sections/SectionCallToAction";
import SectionDiplomes from "./SectionDiplomes";
import SectionWhyMe from "./SectionWhyMe";
import { Helmet } from "react-helmet";


const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    A propos Joelle Corda, Naturopathie et Sophrologie
                </title>
                <link
                    rel="canonical"
                    href="https://www.joelle-corda-naturopathe.fr/about-naturologie-sophrologie"
                />
                <meta
                    name="description"
                    content="Retrouvez votre poids de forme, gérez vos stress et retrouvez une activité physique avec Joelle Corda, naturopathe, sophrologue. 26300 Marches et Romans-sur-Isère"
                />
            </Helmet>
            <SectionAbout />
            <SectionDiplomes />
            <SectionWhyMe />
            <SectionCabinet />
            <SectionCallToAction />
        </>
    );
};

export default About;