const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene2')
        .get((req, res) => {
            res.render('hintScene2');
        })

    return route;
}