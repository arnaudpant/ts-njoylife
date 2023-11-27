
const Tarifs = () => {
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-start bg-tealA">
            <h1 className="text-2xl md:text-4xl font-bold text-center my-4">TARIFS</h1>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-3 gap-x-2 gap-y-1">
                    <div className="bg-tealD">Prestations</div>
                    <div className="bg-tealD">Durée</div>
                    <div className="bg-tealD">Tarif</div>
                    <div className="bg-tealC">4</div>
                    <div className="bg-tealC">5</div>
                    <div className="bg-tealC">6</div>
                    <div className="bg-tealC">7</div>
                    <div className="bg-tealC">8</div>
                    <div className="bg-tealC">9</div>
                </div>

            </div>
        </div>
    );
};

export default Tarifs;