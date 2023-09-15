import React, { useState, useEffect } from 'react';

function Pizza() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json')
      .then((response) => response.json())
      .then((data) => {
        const pizzasData = data.receitas.filter(
          (item) => item.categoria_id === 3 // Use 3 para a categoria "Pizza"
        );
        setPizzas(pizzasData);
      });
  }, []);

  return (
    <div>
      <h1>Pizzas</h1>
      <div className="card-container">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="card">
            <img src={pizza.img} alt={pizza.nome} />
            <h2>{pizza.nome}</h2>
            <p>{pizza.descricao}</p>
            <p>Preço: R${pizza.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizza;
