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

// URI: /nodo/TeacherUpdate/id
app.patch("/TeacherUpdate/:id", async (request, response) => {
  try {
    const teacher = new nodoModel.Teacher(request.body);
    await nodoModel.Teacher.findByIdAndUpdate(request.params.id, request.body);
    await nodoModel.Teacher.save();
    response.send(teacher);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/TeacherDelete/:id", async (request, response) => {
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

//URIS para Students

app.get("/Students", async (request, response) => {
  const students = await nodoModel.Student.find({});

  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/StudentInsert", async (request, response) => {
  const student = new nodoModel.Student(request.body);

  try {
    await student.save();
    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/StudentUpdate/:id", async (request, response) => {
  try {
    const student = new nodoModel.Student(request.body);
    await nodoModel.Student.findByIdAndUpdate(request.params.id, request.body);
    await nodoModel.Student.save();
    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/StudentDelete/:id", async (request, response) => {
  try {
    const student = await nodoModel.Student.findByIdAndDelete(
      request.params.id
    );

    if (!student) response.status(404).send("No student found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

//URIS para Courses

app.get("/Courses", async (request, response) => {
  const courses = await nodoModel.Course.find({});

  try {
    response.send(courses);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/CourseInsert", async (request, response) => {
  const course = new nodoModel.Course(request.body);

  try {
    await course.save();
    response.send(course);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/CourseUpdate/:id", async (request, response) => {
  try {
    const course = new nodoModel.Course(request.body);
    await nodoModel.Course.findByIdAndUpdate(request.params.id, request.body);
    await nodoModel.Course.save();
    response.send(course);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/CourseUpdate/:id", async (request, response) => {
  try {
    const course = new nodoModel.Course(request.body);
    await nodoModel.Course.findByIdAndUpdate(request.params.id, request.body);
    await nodoModel.Course.save();
    response.send(course);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/CourseDelete/:id", async (request, response) => {
  try {
    const course = await nodoModel.Course.findByIdAndDelete(request.params.id);

    if (!course) response.status(404).send("No course found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
