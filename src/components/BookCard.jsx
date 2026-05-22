import livro from '../assets/livro1.png'
import './BookCard.css'

function BookCard() {
  return (
    <div className="book-card">
      <img src={livro} alt="Livro" />

      <h3>React para Iniciantes</h3>

      <p>
        Aprenda React do básico ao avançado com exemplos práticos.
      </p>

      <button>Comprar</button>
    </div>
  )
}

export default BookCard