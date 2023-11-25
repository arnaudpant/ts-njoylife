import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import Home from "./pages/Home"
import Nutrition from "./pages/coaching/Nutrition"
import Cgu from "./pages/Cgu"
import Stress from "./pages/coaching/Stress"
import Sport from "./pages/coaching/Sport"
import MassageCalifornien from "./pages/massages/MassageCalifornien"
import MassageInfini from "./pages/massages/MassageInfini"
import MassageKansu from "./pages/massages/MassageKansu"
import MassageDienChan from "./pages/massages/MassageDienChan"
import About from "./pages/About"
import Ateliers from "./pages/Ateliers"
import Audios from "./pages/Audios"
import Tarifs from "./pages/Tarifs"
import MassageChiNei from "./pages/massages/MassageChiNei"


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nutrition/#top-page" element={<Nutrition />} />
          <Route path="/stress/#top-page" element={<Stress />} />
          <Route path="/sport/#top-page" element={<Sport />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/massage-californien/#top-page" element={<MassageCalifornien />} />
          <Route path="/massage-infini/#top-page" element={<MassageInfini />} />
          <Route path="/massage-kansu/#top-page" element={<MassageKansu />} />
          <Route path="/massage-dienchan/#top-page" element={<MassageDienChan />} />
          <Route path="/massage-chinei/#top-page" element={<MassageChiNei />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/ateliers" element={<Ateliers />} />
          <Route path="/audios" element={<Audios />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
