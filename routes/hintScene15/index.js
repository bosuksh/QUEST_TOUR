const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene15')
        .get((req, res) => {
            res.render('hintScene15');
        })

    return route;
}