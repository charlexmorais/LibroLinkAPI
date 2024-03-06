import logo from "./assets/logo.png";
import ocultar from "./assets/ocultar.png";
import "./global.css";
function App() {
  return (
    // container contendo todo conteudo
    <div className="container">
      <header className="header">
        <img id="logo" src={logo} alt="logo library" />
        <span>Por favor digite suas informações de login </span>
      </header>
      <form>
        <div className="inputcontainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="jonndoe@gmail.com"
          />
        </div>

        <div className="inputcontainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="************"
          />
          <i  id="loginIcon" class="material-icons toggle-password-icon icones-login" data-form-id="login">visibility_off</i>
        </div>
        <a href="">Senha requerida</a>
      </form>
      <button className="button">Entrar</button>
      <div className="footer">
        <p>Você não tem uma conta? </p>
        <a href="#">Crie a sua conta aqui</a>
      </div>
    </div>
  );
}

export default App;
