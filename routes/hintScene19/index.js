const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene19')
        .get((req, res) => {
            res.render('hintScene19');
        })

    return route;
}