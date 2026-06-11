import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Catalogo from '../pages/Catalogo/Catalogo'
import Compras from '../pages/Compras/Compras'
import Details from '../pages/Details/Details'
import Login from '../pages/Login/Login'
import Categoria from '../pages/Categoria/Categoria'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/detalhes" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categoria" element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes