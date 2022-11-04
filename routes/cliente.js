const express = require("express");
const router = express.Router();

router.get("/:id?", function (req, res) {
  res.send("Listagem de clientes");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("Criar cliente");
});

router.put("/:id", function (req, res) {
  console.log(req.body);
  res.send("Atualizar cliente");
});

router.delete("/:id", function (req, res) {
  res.send("Remover cliente");
});

module.exports = router;
