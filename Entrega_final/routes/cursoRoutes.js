const express = require("express");
const router = express.Router();

const cursoModel = require("../models/cursos");

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
    .then((estudiante) => {
      if (estudiante) {
        res.render("curso/verinfocurso", {
          estudiante: estudiante,
        });
      }
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Estudiantes");
    });
});

module.exports = router;
