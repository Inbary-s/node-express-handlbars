const express = require('express');
const burger = require('../models/burger');
const Router = express.Router();


Router.get('/', function(req,res){
burger.getAll(function(data){
res.render('index', {burgers:data})
})
})

Router.post('/', function(req,res){
burger.insertOne(req.body, function(data){
    console.log(data)
    res.redirect('/')
})
})

Router.put('/:id', function(res, req){

})

module.exports = Router

// 4. Create the `router` for the app, 
// and export the `router` at the end of your file.