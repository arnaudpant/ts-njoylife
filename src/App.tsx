import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import Home from "./pages/Home"
import Nutrition from "./pages/coaching/Nutrition"
import Cgu from "./pages/Cgu"
import Stress from "./pages/coaching/Stress"
import Sport from "./pages/coaching/Sport"
import PackVitalite from "./pages/packs/PackVitalite"


const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/stress" element={<Stress />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/pack-vitalite" element={<PackVitalite />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
