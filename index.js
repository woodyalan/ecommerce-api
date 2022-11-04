const express = require("express");
const app = express();
const cliente = require("./routes/cliente");
const pedido = require("./routes/pedido");

app.use(express.json());

app.use("/cliente", cliente);
app.use("/pedido", pedido);

app.listen(3000, function () {
  console.log("Aplicação rodando na porta 3000");
});
