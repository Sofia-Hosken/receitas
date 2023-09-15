import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json')
      .then((response) => response.json())
      .then((data) => {
        setItens(data.receitas);
      });
  }, []);
  return (
    <div>
        <header>
            <Link to="/pizza">Pizza</Link>
            <Link to="/hamburguer">Hamburguer</Link>
            <Link to="/refrigerante">Refrigerante</Link>
        </header>
      <h1>Todos os Itens</h1>
      <div className="card-container">
        {itens.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.nome} />
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <p>Preço: R${item.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Home