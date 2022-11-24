const express = require("express");
const app = express();
const cliente = require("./routes/cliente");
const pedido = require("./routes/pedido");
const cep = require("./routes/cep");
const produto = require("./routes/produto");
const tipoProduto = require("./routes/tipo_produto");
const login = require("./routes/login");
const verifyToken = require("./middlewares/auth");

app.use(express.json());

app.use("/login", login);
app.use("/cep", cep);
app.use("/cliente", cliente);
app.use(verifyToken);
app.use("/produto", produto);
app.use("/pedido", pedido);
app.use("/tipo_produto", tipoProduto);

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000");
});
