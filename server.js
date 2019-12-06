const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();

// permitir receber JSON nas requisições
app.use(express.json());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true
});

requireDir("./src/models");

const Product = mongoose.model("Product");

// Primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001);
