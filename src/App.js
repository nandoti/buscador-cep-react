import { FiSearch } from "react-icons/fi";

import "./layout/styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." />

        <button className="buttonSearch">
          <FiSearch size={24} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>20710310</h2>

        <span>Rua Baronesa de Uruguaiana</span>
        <span>Complemento: Nº 75, Casa 4</span>
        <span>Lins de vasconcelos - RJ</span>
      </main>
    </div>
  );
}

export default App;
