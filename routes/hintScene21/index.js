const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene21')
        .get((req, res) => {
            res.render('hintScene21');
        })

    return route;
}