import logo from "./assets/logo.png";
import "./global.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img id="logo" src={logo} alt="Logo da biblioteca" />
        <span>BEM-VINDO DE VOLTA!</span>
      </header>
      <form className="form">
        <div className="inputcontainer">
          <label htmlFor="email">Endereço de E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="inputcontainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          <i
            id="loginIcon"
            className="material-icons toggle-password-icon icones-login"
            data-form-id="login"
          >
            visibility_off
          </i>
        </div>
        <a href="#">Esqueceu sua senha?</a>
      </form>
      <button className="button">Entrar</button>
      <div className="footer">
        <p>Ainda não tem uma conta?</p>
        <a href="#">Crie a sua conta aqui</a>
      </div>
    </div>
  );
}

export default App;

