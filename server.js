const mysql = require('mysql');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const burgerRoutes = require('./controllers/burgers_controller.js')

app.use(burgerRoutes);












app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });