import './BookCard.css'

function BookCard({ imagem, titulo, descricao }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />

      <h2>{titulo}</h2>

      <p>
        {descricao}
      </p>

      <button>Comprar</button>
    </div>
  )
}

export default BookCard