const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene9')
        .get((req, res) => {
            res.render('hintScene9');
        })

    return route;
}