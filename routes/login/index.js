const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/login')
        .get((req, res) => {
            res.render('login');
        })
        .post((req,res) =>  {
        var uname = req.body.username;
        var pwd = req.body.password;
        if (uname == 'bosuksh' && pwd == '123123') {
            req.session.uname = 'bosuksh';   
            req.session.password= '123123';
            req.session.name='Sanghyup';
            req.session.hint1=  {'flag': 0, 'who': '사신', 'where': 5, 'when': '16:00'}
            res.redirect('/scene1');
        }
    })    
    return route;
}
