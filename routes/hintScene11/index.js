const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene11')
        .get((req, res) => {
            res.render('hintScene11');
        })

    return route;
}