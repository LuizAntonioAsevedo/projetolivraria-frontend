import { useEffect, useMemo, useState } from 'react'
import { fetchBooks } from '../../services/api'
import { useCart } from '../../contexts/CartContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BookCard from '../../components/BookCard'
import './Catalogo.css'

const PAGE_SIZE = 8

function Catalogo() {
  const { addBook } = useCart()
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Todas')
  const [sort, setSort] = useState('menor-preco')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetchBooks()
      .then((response) => {
        setBooks(response.data)
        setError('')
      })
      .catch(() => {
        setError('Não foi possível carregar o catálogo. Tente novamente mais tarde.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const categories = useMemo(() => {
    const unique = Array.from(new Set(books.map((book) => book.categoria)))
    return ['Todas', ...unique]
  }, [books])

  const filteredBooks = useMemo(() => {
    let result = books

    if (search.trim()) {
      result = result.filter((book) =>
        book.titulo.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (filter !== 'Todas') {
      result = result.filter((book) => book.categoria === filter)
    }

    if (sort === 'menor-preco') {
      result = [...result].sort((a, b) => a.preco - b.preco)
    } else if (sort === 'maior-preco') {
      result = [...result].sort((a, b) => b.preco - a.preco)
    } else if (sort === 'titulo') {
      result = [...result].sort((a, b) => a.titulo.localeCompare(b.titulo))
    }

    return result
  }, [books, filter, search, sort])

  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / PAGE_SIZE))
  const currentBooks = filteredBooks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [search, filter, sort])

  return (
    <>
      <Header />

      <main className="catalogo-page">
        <section className="catalogo-hero">
          <div>
            <span>Catálogo de livros</span>
            <h1>Encontre o livro ideal para sua próxima leitura</h1>
            <p>Pesquisa, filtro, ordenação e carrinho totalmente integrados ao backend.</p>
          </div>
        </section>

        <section className="catalogo-controls">
          <div className="catalogo-search">
            <input
              type="search"
              placeholder="Buscar por título"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="catalogo-filters">
            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
              <option value="titulo">Título</option>
            </select>
          </div>
        </section>

        <section className="catalogo-grid">
          {loading && <p className="catalogo-message">Carregando livros...</p>}
          {error && <p className="catalogo-error">{error}</p>}
          {!loading && !error && currentBooks.length === 0 && (
            <p className="catalogo-message">Nenhum livro encontrado com esses filtros.</p>
          )}

          {currentBooks.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={() => addBook(book)} />
          ))}
        </section>

        <section className="catalogo-pagination">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
            Anterior
          </button>
          <span>
            Página {page} de {totalPages}
          </span>
          <button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
            Próxima
          </button>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Catalogo
