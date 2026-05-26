import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './Details.css'

function Details() {
  return (
    <>
      <Header />

      <main className="details">
        <h1>Detalhes do Livro</h1>

        <div className="details-card">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51gdVAEfPUL.jpg"
            alt="Livro React"
          />

          <div className="details-info">
            <h2>React para Iniciantes</h2>

            <p>
              Aprenda React do básico ao avançado com exemplos
              práticos e projetos reais.
            </p>

            <button>Comprar Agora</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Details