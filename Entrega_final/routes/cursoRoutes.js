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

router.get("/verInfoCurso/:id_info", function (req, res, next) {
  cursoModel
    .obtenerDetalles(req.params.id_info)
    .then((curso) => {
      res.render("curso/verInfoCurso", {
        curso: curso,
      });
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Detalles");
    });
});

module.exports = router;
