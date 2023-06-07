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
  obtenerDetalles(id_curso) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select distinct c.precio, c.url, pc.año, pc.semestre, p.nombre_completo from nodo_entrega4.curso c inner join nodo_entrega4.info_curso
        ic on c.id_curso = ic.id_curso inner join nodo_entrega4.profesor_curso pc on c.id_curso = pc.id_curso
        inner join nodo_entrega4.profesor p on pc.doc_id = p.doc_id where ic.id_info = ?`,
        [id_curso],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
};
