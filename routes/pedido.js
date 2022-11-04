const express = require("express");
const router = express.Router();

router.get("/:id?", function (req, res) {
  res.send("Listagem de pedidos");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("Criar pedido");
});

router.put("/:id", function (req, res) {
  console.log(req.body);
  res.send("Atualizar pedido");
});

router.delete("/:id", function (req, res) {
  res.send("Remover pedido");
});

module.exports = router;
