const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene6')
        .get((req, res) => {
            res.render('hintScene6');
        })

    return route;
}