const conexion = require("../conexion");

module.exports = {
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select distinct i.id_info, c.id_curso, c.nombre, i.categoria, i.fecha_inicio, i.fecha_fin 
from nodo_entrega3.curso c inner join nodo_entrega3.info_curso i on c.id_curso = i.id_curso;`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerDetalles(id_info) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select distinct c.id_curso, ic.id_info, c.precio, c.url, pc.año, pc.semestre,
        p.nombre_completo from nodo_entrega3.curso c inner join nodo_entrega3.info_curso
        ic on c.id_curso = ic.id_curso inner join nodo_entrega3.profesor_curso pc on c.id_curso = pc.id_curso
        inner join nodo_entrega3.profesor p on pc.doc_id = p.doc_id where ic.id_info = ?`,
        [id_info],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerEstudiantes(id_info) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select distinct r.id_estudiante, e.nombre_completo from registro_estu r inner join estudiante e
        on r.id_estudiante = e.id_estudiante where r.id_info = ?`,
        [id_info],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  
  obtenerMateriales(id_info) {
    return new Promise((resolve, reject) => {
      conexion.query(
        'select distinct m.nombre_archivo, m.descripcion, m.fecha_creacion from material m inner join info_curso ic on ic.id_info = m.id_info where r.id_info = ?',
        [id_info],
        (err, resultados) => {
          if (err) reject(err);
            else resolve(resultados);
        }
      );
  });
},
obtenerTareas(id_info) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select nombre_tarea, descripcion, fecha_entrega, archivo from tarea t inner join info_curso i
        on t.id_info = i.id_info where i.id_info = ?`,
        [id_info],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerForos(id_info) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select distinct nombre, descripcion, fecha_creacion from foro f inner join info_curso i
on f.id_info = i.id_info where i.id_info = ?`,
        [id_info],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
};

