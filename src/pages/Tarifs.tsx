
const Tarifs = () => {
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-start bg-tealA">
            <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">TARIFS</h1>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-3 gap-x-2 gap-y-1">
                    <div className="bg-tealD">Prestations</div>
                    <div className="bg-tealD">Durée</div>
                    <div className="bg-tealD">Tarif</div>

                    <div className="bg-tealC">Coaching global</div>
                    <div className="bg-tealC">60 min ***</div>
                    <div className="bg-tealC">49 €</div>

                    <div className="bg-tealC">Accompagnement individuel</div>
                    <div className="bg-tealC"></div>
                    <div className="bg-tealC"></div>

                    <div className="bg-tealC">Massage californien</div>
                    <div className="bg-tealC">60 min</div>
                    <div className="bg-tealC">60 €</div>

                    <div className="bg-tealC">Massage infini</div>
                    <div className="bg-tealC">60 min</div>
                    <div className="bg-tealC">60 €</div>

                    <div className="bg-tealC">Massage Kansu</div>
                    <div className="bg-tealC">30 min</div>
                    <div className="bg-tealC">30 €</div>

                    <div className="bg-tealC">Massage Dien' Chan</div>
                    <div className="bg-tealC">60 min</div>
                    <div className="bg-tealC">60 €</div>

                    <div className="bg-tealC">Massage Chi Nei Tsang</div>
                    <div className="bg-tealC">60 min</div>
                    <div className="bg-tealC">60 €</div>

                    <div className="bg-tealC">Cours collectifs</div>
                    <div className="bg-tealC"></div>
                    <div className="bg-tealC"></div>

                    <div className="bg-tealC">Pilate</div>
                    <div className="bg-tealC"></div>
                    <div className="bg-tealC"></div>
                </div>

            </div>
        </div>
    );
};

export default Tarifs;