import React, { useState, useEffect } from 'react';

function Hamburguer() {
  const [hamburguers, setHamburguers] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json')
      .then((response) => response.json())
      .then((data) => {
        const hamburguersData = data.receitas.filter(
          (item) => item.nome === 'Hambúrguer' || item.nome === 'X-Búrguer' || item.nome === 'X-Bacon' || item.nome === 'X-Tudo'
        );
        setHamburguers(hamburguersData);
      });
  }, []);

  return (
    <div>
      <h1>Hamburguers</h1>
      <div className="card-container">
        {hamburguers.map((hamburguer) => (
          <div key={hamburguer.id} className="card">
            <img src={hamburguer.img} alt={hamburguer.nome} />
            <h2>{hamburguer.nome}</h2>
            <p>{hamburguer.descricao}</p>
            <p>Preço: R${hamburguer.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hamburguer;
