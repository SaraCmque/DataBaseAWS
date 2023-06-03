// copie el archivo actualice el host con la url adecuada,
// si es local: localhost, si es en aws rds, obtenga el host de la base de datos adecuada.
const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: "localhost",
  // host: "host-aws-rds",
  user: "dbuser",
  password: "Eafit2023.",
  database: "nodo_entrega3",
});
