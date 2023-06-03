const express = require("express");
const mongoose = require("mongoose");
const nodoRouter = require("./routes/nodoRoutes.js");

const app = express();

app.use(express.json());

const mongolocal = "mongodb://localhost/nodo";

mongoose.connect(mongolocal);

app.use("/nodo", nodoRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
