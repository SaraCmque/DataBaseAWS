const express = require("express");
const router = express.Router();

const profesorModel = require("../models/cursos");

router.get("/", function (req, res, next) {
  profesorModel
    .obtener()
    .then((curso) => {
      res.render("cursos/ver", {
        curso: curso,
      });
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Cursos");
    });
});

module.exports = router;
