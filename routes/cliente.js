const { Router } = require("express");
const router = Router();

router.get("/:id?", (req, res) => {
  res.send("Listagem de clientes");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Criar cliente");
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  res.send("Atualizar cliente");
});

router.delete("/:id", (req, res) => {
  res.send("Remover cliente");
});

module.exports = router;
