const { Router } = require("express");
const { check, body, validationResult } = require("express-validator");
const { criar, atualizar, remover, buscar } = require("../controllers/cliente");
const router = Router();
const verifyToken = require("../middlewares/auth");

router.get(
  "/:id?",
  verifyToken,
  check("id").optional().isInt(),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .send({ mensagem: "Dados inválidos", erros: errors.array() });
      }

      const result = await buscar(req.params.id);

      res.send(result);
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
);

router.post(
  "/",
  body("email").isEmail().not().isEmpty().normalizeEmail(),
  body("senha").isStrongPassword({ minLength: 5 }),
  check("nome").not().isEmpty().trim(),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .send({ mensagem: "Dados inválidos", erros: errors.array() });
      }

      const result = await criar(req.body);

      res.send(result);
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
);

router.put("/:id", verifyToken, async (req, res) => {
  try {
    await atualizar(req.params.id, req.body);
    const result = await buscar(req.params.id);

    res.send(result);
  } catch (error) {
    res.status(500).send({ mensagem: error.message });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await remover(req.params.id);
    res.send("Remover cliente");
  } catch (error) {
    res.status(500).send({ mensagem: error.message });
  }
});

module.exports = router;
