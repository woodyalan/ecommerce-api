const { Router } = require("express");
const { criar, atualizar, remover } = require("../controllers/cliente");
const router = Router();

router.get("/:id?", (req, res) => {
  res.send("Listagem de clientes");
});

router.post("/", async (req, res) => {
  const result = await criar(req.body);

  res.send(result);
});

router.put("/:id", async (req, res) => {
  const result = await atualizar(req.params.id, req.body);

  res.send(result);
});

router.delete("/:id", async (req, res) => {
  await remover(req.params.id);
  res.send("Remover cliente");
});

module.exports = router;
