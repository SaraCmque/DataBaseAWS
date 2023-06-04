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

app.post("/insert", async (request, response) => {
  const teacher = new nodoModel.Teacher(request.body);

  try {
    await teacher.save();
    response.send(teacher);
  } catch (error) {
    response.status(500).send(error);
  }
});

// URI: /nodo/actualizar/{id}
app.patch("/update/:id", async (request, response) => {
  try {
    const teacher = new nodoModel.Teacher(request.body);
    await nodoModel.Teacher.findByIdAndUpdate(request.params.id, request.body);
    await nodoModel.Teacher.save();
    response.send(teacher);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/eliminar/:id", async (request, response) => {
  try {
    const teacher = await nodoModel.Teacher.findByIdAndDelete(
      request.params.id
    );

    if (!teacher) response.status(404).send("No teacher found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
