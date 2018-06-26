const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene8')
        .get((req, res) => {
            res.render('hintScene8');
        })

    return route;
}