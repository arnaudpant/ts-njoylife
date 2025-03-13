import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/home/Home";
import Nutrition from "./pages/coaching/Nutrition";
import Cgu from "./pages/Cgu";
import Stress from "./pages/coaching/Stress";
import Sport from "./pages/coaching/Sport";
import MassageCalifornien from "./pages/massages/MassageCalifornien";
import MassageInfini from "./pages/massages/MassageInfini";
import MassageKansu from "./pages/massages/MassageKansu";
import MassageDienChan from "./pages/massages/MassageDienChan";
import About from "./pages/about/About";
import Ateliers from "./pages/Ateliers";
import Audios from "./pages/Audios";
import Tarifs from "./pages/Tarifs";
import MassageChiNei from "./pages/massages/MassageChiNei";
import Sonore from "./pages/massages/Sonore";
import Politique from "./pages/Politique";
import Naturopathie from "./pages/Naturopathie";
import MassageKobido from "./pages/massages/MassageKobido";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-naturologie-sophrologie" element={<About />} />
                    <Route path="/coaching-nutrition" element={<Nutrition />} />
                    <Route
                        path="/coaching-gestion-stress"
                        element={<Stress />}
                    />
                    <Route path="/coaching-sport" element={<Sport />} />
                    <Route
                        path="/massage-californien"
                        element={<MassageCalifornien />}
                    />
                    <Route path="/massage-infini" element={<MassageInfini />} />
                    <Route path="/massage-kobido" element={<MassageKobido />} />
                    <Route path="/massage-kansu" element={<MassageKansu />} />
                    <Route
                        path="/massage-dienchan"
                        element={<MassageDienChan />}
                    />
                    <Route path="/massage-chinei" element={<MassageChiNei />} />
                    <Route path="/reflection-sonore" element={<Sonore />} />
                    <Route path="/tarifs" element={<Tarifs />} />
                    <Route path="/ateliers" element={<Ateliers />} />
                    <Route path="/audios" element={<Audios />} />
                    <Route path="/role-naturopathie" element={<Naturopathie />} />
                    <Route path="/cgu" element={<Cgu />} />
                    <Route path="/politique" element={<Politique />} />
                    <Route path="/cgu" element={<Cgu />} />
                    <Route path="/*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
