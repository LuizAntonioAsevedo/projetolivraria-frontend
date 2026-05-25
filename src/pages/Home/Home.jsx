import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BookCard from '../../components/BookCard'

import './Home.css'

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <h1>Bem-vindo à Livraria</h1>

        <div className="books-grid">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home