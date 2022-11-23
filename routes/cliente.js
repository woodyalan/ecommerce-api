const { Router } = require("express");
const { criar, atualizar, remover, buscar } = require("../controllers/cliente");
const router = Router();

router.get("/:id?", async (req, res) => {
  try {
    const result = await buscar(req.params.id);

    res.send(result);
  } catch (error) {
    res.status(500).send({ mensagem: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await criar(req.body);

    res.send(result);
  } catch (error) {
    res.status(500).send({ mensagem: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    await atualizar(req.params.id, req.body);
    const result = await buscar(req.params.id);

    res.send(result);
  } catch (error) {
    res.status(500).send({ mensagem: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await remover(req.params.id);
    res.send("Remover cliente");
  } catch (error) {
    res.status(500).send({ mensagem: error.message });
  }
});

module.exports = router;
