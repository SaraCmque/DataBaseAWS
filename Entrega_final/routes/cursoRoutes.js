const express = require("express");
const router = express.Router();

const cursoModel = require("../models/cursos");
const estudianteModel = require("../models/cursos");

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
router.get("/verInfoCurso/:id_info", function (req, res, next) {
  const id_info = req.params.id_info;
  Promise.all([
    cursoModel.obtenerDetalles(id_info),
    estudianteModel.obtenerEstudiantes(id_info), // Replace with the actual function to fetch data for the second table
  ])
    .then(([curso, estudiante]) => {
      res.render("curso/verInfoCurso", {
        curso: curso,
        estudiante: estudiante,
      });
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Detalles");
    });
});



module.exports = router;
