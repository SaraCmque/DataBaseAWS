const conexion = require("../conexion");

module.exports = {
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select distinct c.id_curso, c.nombre, i.categoria, i.fecha_inicio, i.fecha_fin 
        from nodo_entrega3.curso c inner join nodo_entrega3.info_curso i on c.id_curso = i.id_curso`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
};
