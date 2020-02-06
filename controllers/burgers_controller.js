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
        res.json({ id: res.insertId });
    });
});

router.put('/api/burgers/:id', function(req,res){
    burger.update(req.params.id, function(data){
        if (data.changedRows == 0){
            return res.status(404).end();
        }
    });
});

module.exports = router