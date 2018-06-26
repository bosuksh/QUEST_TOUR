const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene')
        .get((req, res) => {
            res.render('hintScene', {'who' : '병사'});
        })

    return route;
}