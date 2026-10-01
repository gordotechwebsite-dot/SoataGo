import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import PlaceDetail from './pages/PlaceDetail'
import RoutesList from './pages/RoutesList'
import RouteDetail from './pages/RouteDetail'
import MapPage from './pages/MapPage'
import Pass from './pages/Pass'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explorar" element={<Explore />} />
        <Route path="lugar/:id" element={<PlaceDetail />} />
        <Route path="rutas" element={<RoutesList />} />
        <Route path="rutas/:id" element={<RouteDetail />} />
        <Route path="mapa" element={<MapPage />} />
        <Route path="pass" element={<Pass />} />
        <Route path="acerca" element={<About />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
