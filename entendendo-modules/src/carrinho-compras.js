var produtos = require("./produtos.js");

const calcularTotal = () => {
  console.log("Somando : ", produtos);
  let total = 0;

  produtos.forEach(produto => {
    total += produto.preco;
  });

  return total;
};

module.exports = calcularTotal;
