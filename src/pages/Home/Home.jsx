import Header from '../../components/Header'
import Footer from '../../components/Footer'

import entrada from '../../assets/entrada.jpg'

import './Home.css'

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <h1>Bem-vindo à Livraria</h1>

        <p className="home-description">
          A Future and Knowledge Bookstore é uma livraria virtual desenvolvida para conectar
          leitores ao universo da tecnologia, programação e conhecimento.
          Aqui você encontra conteúdos sobre React, Java, SQL, História e muito mais.
          Nosso objetivo é proporcionar aprendizado, inspiração e acesso
          a livros de qualidade em um ambiente moderno e intuitivo.
        </p>

        <div className="home-banner">
          <img src={entrada} alt="Entrada Livraria" />

          <div className="home-info">
            <h2>Descubra Novos Livros</h2>

            <p>
              Explore uma coleção incrível de livros sobre
              programação, tecnologia, negócios e muito mais.
            </p>

            <button>Explorar Agora</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home