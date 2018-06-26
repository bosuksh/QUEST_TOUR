const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene24')
        .get((req, res) => {
            res.render('hintScene24');
        })

    return route;
}