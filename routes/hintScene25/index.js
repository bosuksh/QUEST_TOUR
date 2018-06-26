const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene25')
        .get((req, res) => {
            res.render('hintScene25');
        })

    return route;
}