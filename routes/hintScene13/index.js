const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene13')
        .get((req, res) => {
            res.render('hintScene13');
        })

    return route;
}