import { useState } from 'react'
import { createOrder } from '../../services/api'
import { useCart } from '../../contexts/CartContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Compras.css'

function Compras() {
  const { items, total, updateQuantity, removeBook, clearCart } = useCart()
  const [cliente, setCliente] = useState({ nome: '', email: '', telefone: '' })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setCliente((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setMessage('')

    if (!cliente.nome || !cliente.email || !cliente.telefone) {
      setError('Preencha todos os dados do cliente antes de finalizar o pedido.')
      return
    }

    if (items.length === 0) {
      setError('Adicione ao menos um livro ao carrinho antes de finalizar o pedido.')
      return
    }

    setLoading(true)
    const payload = {
      cliente,
      itens: items.map((item) => ({ livroId: item.id, quantidade: item.quantity })),
    }

    try {
      await createOrder(payload)
      setMessage('Pedido finalizado com sucesso! Obrigado pela compra.')
      clearCart()
      setCliente({ nome: '', email: '', telefone: '' })
    } catch (err) {
      setError(
        err?.response?.data?.error ||
          'Não foi possível processar o pedido. Tente novamente em instantes.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />

      <main className="compras-page">
        <section className="compras-hero">
          <div>
            <span>Carrinho de compras</span>
            <h1>Revise seus itens e finalize seu pedido</h1>
            <p>Veja o subtotal, ajuste as quantidades e confirme a compra diretamente com o backend.</p>
          </div>
        </section>

        <section className="compras-layout">
          <div className="compras-items">
            <h2>Itens do carrinho</h2>
            {items.length === 0 ? (
              <p>Seu carrinho está vazio. Acesse o catálogo para escolher livros.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="compras-item">
                  <img src={item.imagemUrl} alt={item.titulo} />
                  <div className="compras-item-info">
                    <h3>{item.titulo}</h3>
                    <span>{item.autor}</span>
                    <strong>R$ {item.preco.toFixed(2)}</strong>
                    <div className="compras-quantity">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="compras-remove" onClick={() => removeBook(item.id)}>
                      Remover
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className="compras-summary">
            <h2>Resumo do pedido</h2>
            <div className="compras-summary-row">
              <span>Subtotal</span>
              <strong>R$ {total.toFixed(2)}</strong>
            </div>

            <form className="compras-form" onSubmit={handleSubmit}>
              <h3>Dados do cliente</h3>
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={cliente.nome}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={cliente.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={cliente.telefone}
                onChange={handleChange}
              />
              {error && <p className="compras-error">{error}</p>}
              {message && <p className="compras-success">{message}</p>}
              <button type="submit" disabled={items.length === 0 || loading}>
                {loading ? 'Finalizando pedido...' : 'Finalizar pedido'}
              </button>
            </form>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Compras
