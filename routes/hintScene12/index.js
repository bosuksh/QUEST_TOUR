const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene12')
        .get((req, res) => {
            res.render('hintScene12');
        })

    return route;
}