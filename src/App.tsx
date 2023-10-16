import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import Home from "./pages/Home"
import Nutrition from "./pages/coaching/Nutrition"
import Cgu from "./pages/Cgu"


const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
