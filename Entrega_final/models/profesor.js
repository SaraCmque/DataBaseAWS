const conexion = require("../conexion");

module.exports = {
  insertar(doc_id, nombre_completo, email, telefono, contrasena) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `insert into profesor(doc_id, nombre_completo, email, telefono, contrasena) values (?, ?, ?,?,?)`,
        [doc_id, nombre_completo, email, telefono, contrasena],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },

  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select doc_id, nombre_completo, email, telefono, contrasena from profesor`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerPorId(doc_id) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select doc_id, nombre_completo, email, telefono, contrasena from profesor where doc_id = ?`,
        [doc_id],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados[0]);
        }
      );
    });
  },
  actualizar(doc_id, nombre_completo, email, telefono, contrasena) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `update profesor
            set nombre_completo = ?,
            email = ?,
            telefono = ?,
            contrasena = ?,
            where doc_id = ?`,
        [nombre_completo, email, telefono, contrasena, doc_id],
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  },
  eliminar(doc_id) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `delete from profesor
            where doc_id = ?`,
        [doc_id],
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  },
};
