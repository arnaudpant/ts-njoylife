import clsx from "clsx";

interface Props {
    children: any
    fond?: "vert" | "blanc"
}

const Sections = ({children, fond}: Props) => {
    return (
        <section className={clsx("flex flex-col items-center md:justify-evenly w-full my-10", fond === 'vert' ? 'bg-primaire':'bg-blanc' )}>
            {children}
        </section>
    );
};

export default Sections;