const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene4')
        .get((req, res) => {
            res.render('scene4');
        })

    return route;
}