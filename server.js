const mysql = require('mysql');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;













app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });