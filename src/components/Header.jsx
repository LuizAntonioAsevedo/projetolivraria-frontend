import { Link } from 'react-router-dom'
import './Header.css'

import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img src={logo} alt="Logo" className="logo" />

        <h1>Projeto Livraria</h1>
      </div>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/details">Detalhes</Link>

        <Link to="/categoria">Categoria</Link>

        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Header