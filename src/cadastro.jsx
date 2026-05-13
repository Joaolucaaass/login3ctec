import { useNavigate } from 'react-router-dom'
import "./cadastro.css";

import logo from "./assets/img/logo.png";
import catalogoImg from "./assets/img/catalogo.jpg";

export default function Cadastro() {
  const navigate = useNavigate()

  return (
    <main>
      <div className="catalogo-panel">
        <img src={catalogoImg} alt="Catalogo" className="catalogo-img" />
      </div>

      <div className="form-panel">
        <img src={logo} alt="Logo" className="logo" />

        <h1 className="titulo">Criar conta</h1>

        <label className="label">Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
        />

        <label className="label">E-mail</label>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
        />

        <label className="label">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha..."
        />

        <label className="label">Confirmar senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha..."
        />

        <button className="btn-entrar">CADASTRAR</button>

        <a href="#" className="link-forgot" onClick={(e) => { e.preventDefault(); navigate('/') }}>Já tenho uma conta</a>
      </div>
    </main>
  );
}
