import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import entrada from "../../assets/entrada.jpg";

import api from "../../services/api";

import "./Home.css";

function Home() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarLivros();
  }, []);

  async function carregarLivros() {
    try {
      const response = await api.get("/livros");
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <main className="home">
        <h1>Bem-vindo à Livraria</h1>

        <p className="home-description">
          A Future and Knowledge Bookstore é uma livraria virtual desenvolvida
          para conectar leitores ao universo da tecnologia, programação e
          conhecimento.
        </p>

        <div className="home-banner">
          <img src={entrada} alt="Entrada Livraria" />

          <div className="home-info">
            <h2>Descubra Novos Livros</h2>

            <p>
              Explore uma coleção incrível de livros sobre programação,
              tecnologia, negócios e muito mais.
            </p>
          </div>
        </div>

        <section className="livros-section">
          <h2>Livros Disponíveis</h2>

          {loading ? (
            <p>Carregando livros...</p>
          ) : livros.length === 0 ? (
            <p>Nenhum livro encontrado.</p>
          ) : (
            <div className="categoria-grid">
              {livros.map((livro) => (
                <div className="categoria-card" key={livro.id}>
                  <img
                    src={livro.imagemUrl}
                    alt={livro.titulo}
                  />

                  <h2>{livro.titulo}</h2>

                  <p>{livro.descricao}</p>

                  <p>
                    <strong>Autor:</strong> {livro.autor}
                  </p>

                  <p>
                    <strong>Categoria:</strong> {livro.categoria}
                  </p>

                  <p>
                    <strong>Preço:</strong> R$ {livro.preco}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;