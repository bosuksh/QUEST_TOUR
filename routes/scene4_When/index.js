const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene4_When')
        .get((req, res) => {
            res.render('scene4_When');
        })

    return route;
}