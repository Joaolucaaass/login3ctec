import { useNavigate } from 'react-router-dom'
import "./App.css";

import logo from "./assets/img/logo.png";
import catalogoImg from "./assets/img/catalogo.jpg";

export default function Login() {
  const navigate = useNavigate()

  return (
    <main>
      <div className="catalogo-panel">
        <img src={catalogoImg} alt="Catalogo" className="catalogo-img" />
      </div>

      <div className="form-panel">
        <img src={logo} alt="Logo" className="logo" />

        <h1 className="titulo">Fazer login</h1>

        <label className="label">Login</label>
        <input
          type="text"
          placeholder="Digite seu login..."
        />

        <label className="label">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha..."
        />

        <button className="btn-entrar" onClick={() => navigate('/listagem')}>ENTRAR</button>

        <a href="#" className="link-forgot" onClick={() => navigate('/cadastro')}>Não tem conta? clique aqui</a>
      </div>
    </main>
  );
}