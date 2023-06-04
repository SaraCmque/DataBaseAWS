const express = require("express");
const nodoModel = require("../models/nodo");
const app = express();

//create URIs para profesor

//consultar: URI -> /nodo/Teachers
app.get("/Teachers", async (request, response) => {
  const teachers = await nodoModel.Teacher.find({});

  try {
    response.send(teachers);
  } catch (error) {
    response.status(500).send(error);
  }
});

//insertar: URI -> nodo/TeacherInsert

app.post("/TeacherInsert", async (request, response) => {
  const teacher = new nodoModel.Teacher(request.body);

  try {
    await teacher.save();
    response.send(teacher);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
