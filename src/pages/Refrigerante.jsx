import React, { useState, useEffect } from 'react';

function Refrigerante() {
  const [refrigerantes, setRefrigerantes] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json')
      .then((response) => response.json())
      .then((data) => {
        const refrigerantesData = data.receitas.filter(
          (item) => item.categoria_id === 2
        );
        setRefrigerantes(refrigerantesData);
      });
  }, []);

  return (
    <div>
      <h1>Refrigerantes</h1>
      <div className="card-container">
        {refrigerantes.map((refrigerante) => (
          <div key={refrigerante.id} className="card">
            <img src={refrigerante.img} alt={refrigerante.nome} />
            <h2>{refrigerante.nome}</h2>
            <p>{refrigerante.descricao}</p>
            <p>Preço: R${refrigerante.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Refrigerante;
