const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene3_1')
        .get((req, res) => {
            res.render('scene3_1');
        })

    return route;
}