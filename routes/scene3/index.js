const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene3')
        .get((req, res) => {
            res.render('scene3');
        })

    return route;
}