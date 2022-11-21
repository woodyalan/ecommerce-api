const { cliente } = require("../models");

const criar = async ({ nome, email, senha, cpf }) => {
  const [result, isNewRecord] = await cliente.findOrCreate({
    defaults: {
      nome,
      email,
      senha,
      cpf,
    },
    where: {
      email,
    },
  });

  console.log("Novo registro?", isNewRecord);

  return result;
};

const atualizar = async (id, { nome, senha, cpf }) => {
  const result = await cliente.update(
    {
      nome,
      senha,
      cpf,
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
  return await cliente.destroy({
    where: {
      id,
    },
  });
};

module.exports = { criar, atualizar, remover };
