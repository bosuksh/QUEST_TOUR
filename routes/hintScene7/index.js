const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene7')
        .get((req, res) => {
            res.render('hintScene7');
        })

    return route;
}