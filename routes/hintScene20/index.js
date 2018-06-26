const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene20')
        .get((req, res) => {
            res.render('hintScene20');
        })

    return route;
}