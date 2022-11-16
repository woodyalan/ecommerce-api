const express = require("express");
const app = express();
const cliente = require("./routes/cliente");
const pedido = require("./routes/pedido");
const cep = require("./routes/cep");
const connection = require("./models");

app.use(express.json());

app.use("/cliente", cliente);
app.use("/pedido", pedido);
app.use("/cep", cep);

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000");
});
