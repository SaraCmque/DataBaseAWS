const express = require("express");
const router = express.Router();

const profesorModel = require("../models/profesor");

router.get("/", function (req, res, next) {
  profesorModel
    .obtener()
    .then((profesor) => {
      res.render("profesor/ver", {
        profesor: profesor,
      });
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Profesor");
    });
});
router.get("/agregar", function (req, res, next) {
  res.render("profesor/agregar");
});
router.post("/insertar", function (req, res, next) {
  const { doc_id, nombre_completo, email, telefono, contrasena } = req.body;
  if (!doc_id || !nombre_completo || !email || !telefono || !contrasena) {
    return res.status(500).send("Falta una parte del registro");
  }
  // Si todo va bien, seguimos
  profesorModel
    .insertar(doc_id, nombre_completo, email, telefono, contrasena)
    .then((doc_id) => {
      res.redirect("/profesor");
    })
    .catch((err) => {
      return res.status(500).send("Error insertando Profesor");
    });
});
router.get("/eliminar/:doc_id", function (req, res, next) {
  profesorModel
    .eliminar(req.params.doc_id)
    .then(() => {
      res.redirect("/profesor");
    })
    .catch((err) => {
      return res.status(500).send("Error eliminando");
    });
});
router.get("/editar/:doc_id", function (req, res, next) {
  profesorModel
    .obtenerPorId(req.params.doc_id)
    .then((profesor) => {
      if (Profesor) {
        res.render("profesor/editar", {
          profesor: profesor,
        });
      } else {
        return res.status(500).send("No existe Profesor con ese id");
      }
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo Profesor");
    });
});
router.post("/actualizar/", function (req, res, next) {
  const { doc_id, nombre, email, telefono, area_p, area_a, contraseña } =
    req.body;
  if (!doc_id || !nombre_completo || !email || !telefono || !contrasena) {
    return res.status(500).send("No hay suficientes datos");
  }
  // Si todo va bien, seguimos
  profesorModel
    .actualizar(doc_id, nombre_completo, email, telefono, contrasena)
    .then(() => {
      res.redirect("/profesor");
    })
    .catch((err) => {
      return res.status(500).send("Error actualizando Profesor");
    });
});

module.exports = router;
