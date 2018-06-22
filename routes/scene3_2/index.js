const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene3_2')
        .get((req, res) => {
            res.render('scene3_2');
        })

    return route;
}