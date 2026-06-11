import './BookCard.css'

function BookCard({ book, onAddToCart }) {
  return (
    <div className="card">
      <img src={book.imagemUrl} alt={book.titulo} />
      <div className="card-content">
        <h2>{book.titulo}</h2>
        <span className="book-author">{book.autor}</span>
        <p>{book.descricao}</p>
      </div>
      <div className="card-footer">
        <strong>R$ {book.preco.toFixed(2)}</strong>
        <button type="button" onClick={onAddToCart}>
          Comprar
        </button>
      </div>
    </div>
  )
}

export default BookCard