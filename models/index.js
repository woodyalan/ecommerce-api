const { Sequelize } = require("sequelize");

const options = {
  username: "postgres",
  password: "postgres",
  database: "ecommerce",
  host: "localhost",
  dialect: "postgres",
};

const connection = new Sequelize(options);
connection
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((erro) => console.log("Erro ao conectar ao banco de dados", erro));

module.exports = connection;
