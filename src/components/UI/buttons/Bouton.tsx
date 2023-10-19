type Props = {
    href: string
    label: string
}

const Bouton = ({href, label}: Props) => {
    return (
        <button className="px-4 py-3 bg-action text-blanc rounded-full w-60">
            <a href={href}>{label}</a>
        </button>
    );
};

export default Bouton;