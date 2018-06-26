const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene4')
        .get((req, res) => {
            res.render('hintScene4');
        })

    return route;
}