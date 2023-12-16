
const Tarifs = () => {
    return (
        <div className="min-h-[calc(100vh-112px)] flex flex-col justify-start bg-tealA">
            <h1 className="font-title text-2xl md:text-4xl font-bold text-center my-4">TARIFS</h1>

            <div className="container px-2 mx-auto mb-4 mt-10 max-w-3xl">
                <div className="grid grid-cols-5 gap-x-2 gap-y-1 rounded-xl">
                    <div className="bg-tealE col-span-5 rounded-xl  py-1">
                        <h2 className="text-center text-xl">COACHING</h2></div>

                    <div className="bg-tealC col-span-4 pl-2">Séance 1H</div>
                    <div className="bg-tealC text-center">60€</div>

                    <div className="bg-tealC col-span-4 pl-2">Forfait 4 (inclus la 1ère séance de 90min)</div>
                    <div className="bg-tealC text-center">49€/ Séance</div>

                    <div className="bg-tealE col-span-5 mt-8 rounded-xl text-center text-xl py-1">
                    <h2 className="text-center text-xl">MASSAGES & REFLEXOLOGIE</h2></div>
                    <div className="bg-tealC col-span-4 pl-2">Séance 60min</div>
                    <div className="bg-tealC text-center">60€</div>
                    <div className="bg-tealC col-span-4 pl-2">Massage bol Kansu - 30min</div>
                    <div className="bg-tealC text-center">30€</div>

                    <div className="bg-tealE col-span-5 mt-8 rounded-xl text-center text-xl py-1">
                    <h2 className="text-center text-xl">COURS COLLECTIFS</h2></div>
                    <div className="bg-tealC col-span-4 pl-2">Pilâtes - 60min</div>
                    <div className="bg-tealC text-center">15€/ Pers</div>
                    <div className="bg-tealC col-span-4 pl-2">Sophrologie - 60min</div>
                    <div className="bg-tealC text-center">15€/ Pers</div>
                    <div className="bg-tealC col-span-4 pl-2">Relaxation - 60min</div>
                    <div className="bg-tealC text-center">15€/ Pers</div>
                </div>

            </div>
        </div>
    );
};

export default Tarifs;