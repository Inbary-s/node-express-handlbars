const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const burgerRoutes = require('./controllers/burgers_controller.js')

app.use(burgerRoutes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });