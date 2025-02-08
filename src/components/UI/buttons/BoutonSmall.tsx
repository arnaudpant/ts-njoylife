type Props = {
    href: string
    label: string
    itemProp?: string
}

const BoutonSmall = ({ href, label, itemProp }: Props) => {
    return (
            <button itemProp={itemProp} className="px-2 py-1 md:py-2 bg-action text-tealA text-md md:text-lg rounded-full w-40">
            <a href={href}>{label}</a>
        </button>
    );
};

export default BoutonSmall;