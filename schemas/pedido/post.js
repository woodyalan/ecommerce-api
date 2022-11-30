module.exports = {
  valorTotal: {
    in: ["body"],
    isNumeric: true,
    custom: {
      options: (value, { req }) => {
        let valorTotal = 0;

        for (const produto of req.body.produtos) {
          valorTotal += parseFloat(produto.valorTotal);
        }

        return valorTotal === parseFloat(value);
      },
      errorMessage:
        "Valor total do pedido não confere com o valor dos produtos",
    },
    errorMessage: "Valor total do pedido inválido",
  },
  "enderecoEntrega.cep": {
    in: ["body"],
    notEmpty: true,
    errorMessage: "CEP do endereço de entrega inválido",
  },
  "enderecoEntrega.logradouro": {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Logradouro do endereço de entrega inválido",
  },
  produtos: {
    in: ["body"],
    notEmpty: true,
    isArray: true,
    errorMessage: "Produtos são obrigatórios",
    custom: {
      options: (value) => {
        return value.length > 0;
      },
      errorMessage: "Você deve informar ao menos um produto",
    },
  },
};
