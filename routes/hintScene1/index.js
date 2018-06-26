const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene1')
        .get((req, res) => {
            res.render('hintScene1');
        })

    return route;
}