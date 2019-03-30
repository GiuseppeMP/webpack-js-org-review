var produtos = require("./produtos.js");

const calcularTotal = () => {
  return produtos.reduce(calcularTotal, produto => {
    calcularTotal += produto.preco;
  });
};

module.exports = calcularTotal;
