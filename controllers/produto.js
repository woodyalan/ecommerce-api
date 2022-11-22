const { produto } = require("../models");

const criar = async ({ nome, valor, descricao, tipoProduto }) => {
  const result = await produto.create({
    nome,
    valor,
    descricao,
    tipoProduto,
  });

  return result;
};

const atualizar = async (id, { nome, valor, descricao, tipoProduto }) => {
  const result = await produto.update(
    {
      nome,
      valor,
      descricao,
      tipoProduto,
    },
    {
      where: {
        id,
      },
    }
  );

  return result;
};

const remover = async (id) => {
  return await produto.destroy({
    where: {
      id,
    },
  });
};

const buscar = async (id = null) => {
  if (id) {
    return await produto.findByPk(id);
  }

  return await produto.findAll();
};

module.exports = { criar, atualizar, remover, buscar };
