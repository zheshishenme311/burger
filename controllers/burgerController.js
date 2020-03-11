const express = require('express')
const Router = express.Router()
const burger = require('../config/orm')

Router.get('/', function(req,res){
    burger.getAll(function(data){
        console.log(data)
        res.render('index', {burgers:data})
    })
    
})

Router.get('/member', function(req,res){
    res.render('member')
})

Router.post('/addburger', function(req,res){
    console.log(req.body)
    burger.create(req.body, function(data){
        res.send(data)
    })
})

Router.put('/eatburger/:id', function(req,res){
    burger.update(req.params.id, function(data){
        res.send(data)
    })
})




module.exports = Router;