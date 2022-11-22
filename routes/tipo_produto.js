const { Router } = require("express");
const router = Router();
const {
  buscarTodos,
  buscarPorId,
  criar,
  atualizar,
  remover,
} = require("../controllers/basic");
const { tipo_produto } = require("../models");

router.get("/:id?", async (req, res) => {
  let result = req.params.id
    ? await buscarPorId(tipo_produto, req.params.id)
    : await buscarTodos(tipo_produto);

  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await criar(tipo_produto, req.body);

  res.send(result);
});

router.put("/:id", async (req, res) => {
  await atualizar(tipo_produto, req.params.id, req.body);
  const result = await buscarPorId(tipo_produto, req.params.id);

  res.send(result);
});

router.delete("/:id", async (req, res) => {
  await remover(tipo_produto, req.params.id);

  res.send();
});

module.exports = router;
