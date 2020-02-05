const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();


router.get('/', function(req,res){
    burger.getAll(function(data){
    res.render('index', {burgers:data});
    });
});

router.post('/api/burgers', function(req,res){
    burger.insertOne(req.body.name, function(data){
        res.json({ id: result.insertId });
        console.log(data);
        res.redirect('/');
    });
});

// Router.put('/:id', function(res, req){

// })

module.exports = router

// 4. Create the `router` for the app, 
// and export the `router` at the end of your file.