const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene18')
        .get((req, res) => {
            res.render('hintScene18');
        })

    return route;
}