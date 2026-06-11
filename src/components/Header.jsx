import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import './Header.css'
import logo from '../assets/logo.png'

function Header() {
  const { itemsCount } = useCart()

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Future and Knowledge Bookstore" className="logo" />

        <div className="title-container">
          <h1>Future and Knowledge Bookstore</h1>
          <p className="slogan">Explore o conhecimento através da leitura</p>
        </div>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/compras">Compras</Link>
        <Link to="/categoria">Categoria</Link>
        <Link to="/login">Login</Link>
      </nav>

      <div className="cart-badge">{itemsCount} livro(s)</div>
    </header>
  )
}

export default Header;