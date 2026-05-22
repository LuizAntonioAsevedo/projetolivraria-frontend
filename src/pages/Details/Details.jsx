import Header from '../../components/Header'
import Footer from '../../components/Footer'

import livro from '../../assets/livro1.png'

import './Details.css'

function Details() {
  return (
    <>
      <Header />

      <main className="details">
        <img src={livro} alt="Livro" />

        <div>
          <h1>React para Iniciantes</h1>

          <p>
            Livro completo para aprender React,
            componentes, props, estados e rotas.
          </p>

          <h2>R$ 79,90</h2>

          <button>Comprar Agora</button>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Details