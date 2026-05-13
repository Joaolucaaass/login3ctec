import { useNavigate } from 'react-router-dom'
import "./listagem.css";

const conteudos = [
  { id: 1, titulo: "The Boys", categoria: "Série", ano: 2019 },
  { id: 2, titulo: "Reacher", categoria: "Série", ano: 2022 },
  { id: 3, titulo: "Falcão e o Soldado Invernal", categoria: "Série", ano: 2021 },
  { id: 4, titulo: "Air", categoria: "Filme", ano: 2023 },
  { id: 5, titulo: "Sonic 3", categoria: "Filme", ano: 2024 },
];

export default function Listagem() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="listagem-container">
        <div className="listagem-header">
          <h1 className="listagem-titulo">Catálogo</h1>
        </div>

        <table className="listagem-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoria</th>
              <th>Ano</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {conteudos.map((item) => (
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.categoria}</td>
                <td>{item.ano}</td>
                <td><button className="btn-acao btn-editar">📝</button></td>
                <td><button className="btn-acao btn-excluir">🗑️</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
