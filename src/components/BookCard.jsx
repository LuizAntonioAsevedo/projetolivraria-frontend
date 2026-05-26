import './BookCard.css'

import logo from '../assets/logo.png'

function BookCard() {
  return (
    <div className="card">
      <img src={logo} alt="Livro" />

      <h2>React para Iniciantes</h2>

      <p>
        Aprenda React do básico ao avançado com exemplos práticos.
      </p>

      <button>Comprar</button>
    </div>
  )
}

export default BookCard