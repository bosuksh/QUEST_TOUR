const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('login')
        .get((req, res) => {
            res.render('login');
        })
    route.route('login').post((req,res) =>  {
        var uname = req.body.username;
        var pwd = req.body.password;
        if (uname == 'bosuksh' && pwd == '123123') {
            req.redirect('/scene1');
        }
    })    
}