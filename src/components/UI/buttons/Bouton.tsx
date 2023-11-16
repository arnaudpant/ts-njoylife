type Props = {
    href: string
    label: string
}

const Bouton = ({ href, label }: Props) => {
    return (
        <button className="px-4 py-4 bg-tealI text-tealA text-lg rounded-full w-60">
            <a href={href}>{label}</a>
        </button>
    );
};

export default Bouton;