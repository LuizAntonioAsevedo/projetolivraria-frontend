import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './Login.css'

function Login() {
  return (
    <>
      <Header />

      <main className="login-container">
        <form className="login-form">
          <h1>Login</h1>

          <input type="email" placeholder="Digite seu email" />

          <input type="password" placeholder="Digite sua senha" />

          <button type="submit">Entrar</button>
        </form>
      </main>

      <Footer />
    </>
  )
}

export default Login