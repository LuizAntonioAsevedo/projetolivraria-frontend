import Header from '../../components/Header'
import Footer from '../../components/Footer'

import historia from '../../assets/historia.jpg'
import java from '../../assets/java.jpg'
import sql from '../../assets/sql.jpg'

import './Categoria.css'

function Categoria() {
  return (
    <>
      <Header />

      <main className="categoria">
        <h1>Categorias de Livros</h1>

        <div className="categoria-grid">

          <div className="categoria-card">
            <img src={historia} alt="História" />

            <h2>História</h2>

            <p>
              Conheça grandes acontecimentos históricos e civilizações.
            </p>

            <button>Explorar</button>
          </div>

          <div className="categoria-card">
            <img src={java} alt="Java" />

            <h2>Java</h2>

            <p>
              Aprenda Java moderno para desenvolvimento backend e web.
            </p>

            <button>Explorar</button>
          </div>

          <div className="categoria-card">
            <img src={sql} alt="SQL" />

            <h2>SQL</h2>

            <p>
              Domine bancos de dados relacionais e linguagem SQL.
            </p>

            <button>Explorar</button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}

export default Categoria