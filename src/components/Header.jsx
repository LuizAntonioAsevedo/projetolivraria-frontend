import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Projeto Livraria</h2>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/details">Detalhes</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Header