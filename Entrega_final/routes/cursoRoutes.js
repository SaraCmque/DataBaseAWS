const express = require("express");
const router = express.Router();

const cursoModel = require("../models/cursos");
const estudianteModel = require("../models/cursos");
const tareaModel = require("../models/cursos");
const materialModel = require("../models/cursos");
const foroModel = require("../models/cursos");

router.get("/", function (req, res, next) {
  cursoModel
    .obtener()
    .then((curso) => {
      res.render("curso/ver", {
        curso: curso,
      });
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Cursos");
    });
});
/*
router.get("/verinfocurso/:id_info", function (req, res, next) {
  cursoModel
    .obtenerDetalles(req.params.id_info)
    .then((curso) => {
      if (curso) {
        res.render("curso/verinfocurso", {
          curso: curso,
        });
      }
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Clase");
    });
});

router.get("/verinfocurso/:id_info", function (req, res, next) {
  cursoModel
    .obtenerEstudiantes(req.params.id_info)
    .then((estudiantes) => {
      if (estudiantes) {
        res.render("curso/verinfocurso", {
          curso: estudiantes,
        });
      }
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Estudiantes");
    });
});
*/
router.get("/verinfocurso/:id_info", function (req, res, next) {
  const id_info = req.params.id_info;
  Promise.all([
    cursoModel.obtenerDetalles(id_info),
    estudianteModel.obtenerEstudiantes(id_info),
    tareaModel.obtenerTareas(id_info),
    materialModel.obtenerMateriales(id_info),
    foroModel.obtenerForos(id_info),
  ])
    .then(([curso, estudiante, tarea, material, foro]) => {
      res.render("curso/verinfocurso", {
        curso: curso,
        estudiante: estudiante,
        tarea: tarea,
        material: material,
        foro: foro,
      });
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Detalles");
    });
});



module.exports = router;
