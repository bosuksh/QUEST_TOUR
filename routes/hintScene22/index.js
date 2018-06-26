const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene22')
        .get((req, res) => {
            res.render('hintScene22');
        })

    return route;
}