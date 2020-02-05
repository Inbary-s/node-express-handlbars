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

Router.put('/api/burgers/:id', function(res, req){
    burger.update({devoured: req.body.devoured}, req.params.id, function(res){
        if (res.changedRows == 0){
            return res.status(404).end();
        }
    })
})

module.exports = router